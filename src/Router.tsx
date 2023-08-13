import React, {useEffect, useState} from 'react';
import {useRecoilState, useResetRecoilState} from 'recoil';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {sessionState} from './state/session';
import {userState} from './state/userState';
import {User} from './interfaces/user';
import {View} from 'react-native';
import CreateAccountStackNav from './navigation/CreateAccountStackNav';
import MenuDrawer from './navigation/MenuDrawer';
import firestore from '@react-native-firebase/firestore';

const Router = () => {
  const [userValue, setUserValue] = useRecoilState(userState);
  const [fbUser, setFbUser] = useRecoilState(sessionState);
  const resetUserData = useResetRecoilState(sessionState);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = async (user: FirebaseAuthTypes.User | null) => {
    if (user) {
      setFbUser(user);
    } else {
      resetUserData();
    }
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    if (fbUser) {
      try {
        const subscriber = firestore()
          .collection('users')
          .doc(fbUser.uid)
          .onSnapshot(documentSnapshot => {
            setUserValue(documentSnapshot.data() as User);
          });
        return () => subscriber();
      } catch (e) {}
    }
  }, [fbUser]);

  if (initializing) return <View />;

  return (
    <NavigationContainer>
      {fbUser && userValue ? <MenuDrawer /> : <CreateAccountStackNav />}
    </NavigationContainer>
  );
};

export default Router;
