import firestore from '@react-native-firebase/firestore';
import {useRecoilValue, useResetRecoilState} from 'recoil';
import {sessionState} from '../../state/session';
import {Place} from '../../interfaces/place';
import {SavedPlace} from '../../interfaces/savedPlace';
import {userState} from '../../state/userState';
import auth from '@react-native-firebase/auth';
import {
  deleteAccountFailed,
  deleteAccountSuccess,
  onResetPasswordEmailFailed,
  onResetPasswordEmailSent,
  onUsernameChangeFailedToast,
  onUsernameChangedToast,
} from '../../utils/toasts';

const useFirebaseDB = () => {
  const fbUser = useRecoilValue(sessionState);
  const userValue = useRecoilValue(userState);
  const resetUserData = useResetRecoilState(userState);
  const resetFbData = useResetRecoilState(sessionState);

  const onHasOnboarded = async () => {
    await firestore().collection('users').doc(fbUser.uid).update({
      hasOnboarded: true,
    });
  };

  const onChangeUsername = async (username: string) => {
    await firestore()
      .collection('users')
      .doc(fbUser.uid)
      .update({
        name: username,
      })
      .then(() => {
        onUsernameChangedToast();
      })
      .catch(() => {
        onUsernameChangeFailedToast();
      });
  };

  const onChangePassword = async (email: string) => {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        onResetPasswordEmailSent();
      })
      .catch(() => {
        onResetPasswordEmailFailed();
      });
  };

  const onSignOut = async () => {
    await auth().signOut();
    resetUserData();
  };

  const onDeleteUser = async (password: string) => {
    const user = auth().currentUser;
    if (user) {
      const credential = auth.EmailAuthProvider.credential(
        user.email!,
        password,
      );
      user
        .reauthenticateWithCredential(credential)
        .then(async () => {
          await firestore()
            .collection('users')
            .doc(fbUser.uid)
            .delete()
            .then(async () => {
              await user?.delete();
              resetFbData();
              resetUserData();
            });
          deleteAccountSuccess();
        })
        .catch(() => {
          deleteAccountFailed();
        });
    }
  };

  const onAddSavedLocation = async (name: string, shownPlaces: Place[]) => {
    const newPlace: SavedPlace = {
      name: name,
      places: shownPlaces,
      visitedPlaces: [],
      updatedAt: new Date().toISOString(),
    };
    await firestore()
      .collection('users')
      .doc(fbUser.uid)
      .update({
        savedPlaces: [...userValue.savedPlaces, newPlace],
      });
  };

  const onDeleteSavedLocation = async (searchedPlaceName: string) => {
    const newList = userValue.savedPlaces.filter(
      place => place.name !== searchedPlaceName,
    );
    await firestore().collection('users').doc(fbUser.uid).update({
      savedPlaces: newList,
    });
  };

  const onAddFoundLandmark = async (
    place: Place,
    searchedPlaceName: string,
  ) => {
    const indx = userValue.savedPlaces.findIndex(
      item => item.name === searchedPlaceName,
    );
    let dateVisitedPlace = {...place, visited_date: new Date().toISOString()};
    if (userValue.savedPlaces[indx]) {
      let newUser = {...userValue};
      let savedPlaces = [...newUser.savedPlaces];
      let thisPlace = {...savedPlaces[indx]!};
      (thisPlace.updatedAt = new Date().toISOString()),
        (thisPlace.visitedPlaces = [
          ...thisPlace.visitedPlaces!,
          dateVisitedPlace,
        ]);
      savedPlaces[indx] = thisPlace;
      newUser.savedPlaces = savedPlaces;

      await firestore().collection('users').doc(fbUser.uid).update({
        savedPlaces: newUser.savedPlaces,
      });
    }
  };

  const onAddFoundLandMarkNotSavedLocation = async (
    visitedPlace: Place,
    searchedPlaceName: string,
    places: Place[],
  ) => {
    await firestore()
      .collection('users')
      .doc(fbUser.uid)
      .update({
        savedPlaces: [
          ...userValue.savedPlaces,
          {
            name: searchedPlaceName,
            places: places,
            visitedPlaces: [visitedPlace],
          },
        ],
      });
  };

  return {
    onSignOut,
    onDeleteUser,
    onChangeUsername,
    onChangePassword,
    onHasOnboarded,
    onAddFoundLandmark,
    onAddSavedLocation,
    onDeleteSavedLocation,
    onAddFoundLandMarkNotSavedLocation,
  };
};

export default useFirebaseDB;
