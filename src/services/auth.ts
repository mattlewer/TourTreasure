import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {onLogInFailure, onSignUpFailure} from './toasts';
import firestore from '@react-native-firebase/firestore';

export const CreateAccount = async (
  username: string,
  email: string,
  password: string,
): Promise<boolean> => {
  try {
    const user: FirebaseAuthTypes.UserCredential | undefined | void =
      await auth().createUserWithEmailAndPassword(email, password);
    if (user) {
      await firestore().collection('users').doc(user.user.uid).set({
        name: username,
        points: 0,
        hasOnboarded: false,
        savedPlaces: [],
      });
    }
    return true;
  } catch (e) {
    onSignUpFailure();
    return false;
  }
};

export const SignIn = async (
  email: string,
  password: string,
): Promise<boolean> => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
    return true;
  } catch (e) {
    onLogInFailure();
    return false;
  }
};
