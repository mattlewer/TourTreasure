import {CreateAccoundStackParams} from '../../../navigation/CreateAccountStackNav';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ICarouselInstance} from 'react-native-reanimated-carousel';
import {useRef, useState} from 'react';
import {useRecoilState} from 'recoil';
import {userState} from '../../../state/userState';
import {localise} from '../../lang/lang';
import {User} from '../../../interfaces/user';
import useHandleUserData from '../../hooks/useHandleUserData';

import Home from '../../../assets/app_example_home.png';
import SelectedLocation from '../../../assets/app_selected_location.png';
import Navigation from '../../../assets/app_navigation.png';
import Map from '../../../assets/app_example_map.png';
import Points from '../../../assets/app_example_points.png';

type HowToUseRouteProp = RouteProp<CreateAccoundStackParams, 'HowToUse'>;

const useHowToUserViewModel = () => {
  const handleUserData = useHandleUserData();
  const [userValue, setUserValue] = useRecoilState(userState);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const {name} = useRoute<HowToUseRouteProp>().params;
  const carouselRef = useRef<ICarouselInstance>(null);

  const info = [
    {
      title: localise('HOW_TO_CARD_TITLE_1'),
      content: localise('HOW_TO_CARD_DESC_1'),
      image: Home,
    },
    {
      title: localise('HOW_TO_CARD_TITLE_2'),
      content: localise('HOW_TO_CARD_DESC_2'),
      image: Map,
    },
    {
      title: localise('HOW_TO_CARD_TITLE_3'),
      content: localise('HOW_TO_CARD_DESC_3'),
      image: SelectedLocation,
    },
    {
      title: localise('HOW_TO_CARD_TITLE_4'),
      content: localise('HOW_TO_CARD_DESC_4'),
      image: Navigation,
    },
    {
      title: localise('HOW_TO_CARD_TITLE_5'),
      content: localise('HOW_TO_CARD_DESC_5'),
      image: Points,
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
