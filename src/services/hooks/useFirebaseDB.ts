import firestore from '@react-native-firebase/firestore';
import {useRecoilState, useRecoilValue} from 'recoil';
import {sessionState} from '../../state/session';
import {User} from '../../interfaces/user';
import {Place} from '../../interfaces/place';
import {SavedPlace} from '../../interfaces/savedPlace';
import {userState} from '../../state/userState';

const useFirebaseDB = () => {
  const fbUser = useRecoilValue(sessionState);
  const userValue = useRecoilValue(userState);

  const onHasOnboarded = async () =>{
    await firestore()
    .collection('users')
    .doc(fbUser.uid)
    .update({
      hasOnboarded: true,
    });
  }

  const onAddSavedLocation = async (name: string, shownPlaces: Place[]) => {
    const newPlace: SavedPlace = {
      name: name,
      places: shownPlaces,
      visitedPlaces: [],
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
      thisPlace.visitedPlaces = [...thisPlace.visitedPlaces!, dateVisitedPlace];
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
    onHasOnboarded,
    onAddFoundLandmark,
    onAddSavedLocation,
    onDeleteSavedLocation,
    onAddFoundLandMarkNotSavedLocation,
  };
};

export default useFirebaseDB;
