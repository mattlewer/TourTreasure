import {CreateAccoundStackParams} from '../../../navigation/CreateAccountStackNav';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ICarouselInstance} from 'react-native-reanimated-carousel';
import {useRef, useState} from 'react';
import {useRecoilState} from 'recoil';
import {userState} from '../../../state/userState';
import {User} from '../../../interfaces/user';
import useHandleUserData from '../../hooks/useHandleUserData';

import Home from '../../../assets/app_example_home.png';
import SelectedLocation from '../../../assets/app_selected_location.png';
import Navigation from '../../../assets/app_navigation.png';
import Map from '../../../assets/app_example_map.png';

type HowToUseRouteProp = RouteProp<CreateAccoundStackParams, 'HowToUse'>;

const useHowToUserViewModel = () => {
  const handleUserData = useHandleUserData();
  const [userValue, setUserValue] = useRecoilState(userState);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const {name} = useRoute<HowToUseRouteProp>().params;
  const carouselRef = useRef<ICarouselInstance>(null);

  const info = [
    {
      title: 'Home',
      content:
        'This will be your central hub to view your profile, saved places, and points collected. It is also where you can search for a new location.',
      image: Home,
    },
    {
      title: 'Locations',
      content:
        'After searching for a location, you will be taken to the map screen, each place you visit you will gain you points, the higher up the list, the more points for visiting!',
      image: Map,
    },
    {
      title: 'Destinations',
      content:
        "Tap a destination on the map or the list to view more information about it, you can also choose from here to receive directions to your chosen point of interest by clicking 'Navigate'...",
      image: SelectedLocation,
    },
    {
      title: 'Directions',
      content:
        '...this will start a route to your destination as well as informing you of the time to get there.',
      image: Navigation,
    },
    {
      title: 'Points',
      content:
        "When you're within 150 meters of the location by either navigating or selecting the location on the map, you'll gain the points!",
      image: Map,
    },
  ];

  const createAccount = () => {
    const newUser: User = {
      name: name,
      points: 0,
      savedPlaces: [],
    };
    handleUserData.storeUser(newUser);
    setUserValue(newUser);
  };

  const onNextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return {
    info,
    carouselRef,
    currentSlide,
    onNextSlide,
    createAccount,
    setCurrentSlide,
  };
};

export default useHowToUserViewModel;
