import {ICarouselInstance} from 'react-native-reanimated-carousel';
import {useEffect, useRef, useState} from 'react';
import {localise} from '../../lang/lang';
import Home from '../../../assets/app_example_home.png';
import SelectedLocation from '../../../assets/app_selected_location.png';
import LocationInfo from '../../../assets/app_example_info.png';
import Navigation from '../../../assets/app_navigation.png';
import Map from '../../../assets/app_example_map.png';
import Points from '../../../assets/app_example_points.png';
import useFirebaseDB from '../../hooks/useFirebaseDB';
import {AppState} from 'react-native';

const useHowToUserViewModel = () => {
  const firebase = useFirebaseDB();
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const carouselRef = useRef<ICarouselInstance>(null);

  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const appStateListener = AppState.addEventListener(
      'change',
      async nextAppState => {
        if (nextAppState === 'background') {
          await firebase.onHasOnboarded();
        }
        appState.current = nextAppState;
      },
    );
    return () => {
      appStateListener.remove();
    };
  }, []);

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
      image: LocationInfo,
    },
    {
      title: localise('HOW_TO_CARD_TITLE_5'),
      content: localise('HOW_TO_CARD_DESC_5'),
      image: Navigation,
    },
    {
      title: localise('HOW_TO_CARD_TITLE_6'),
      content: localise('HOW_TO_CARD_DESC_6'),
      image: Points,
    },
  ];

  const onContinueToHome = async () => {
    await firebase.onHasOnboarded();
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
    onContinueToHome,
    setCurrentSlide,
  };
};

export default useHowToUserViewModel;
