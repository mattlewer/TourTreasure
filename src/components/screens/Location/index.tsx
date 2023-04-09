import React from 'react';
import {StyleSheet, View} from 'react-native';
import Map from '../../modules/Map';
import PlaceHeader from '../../modules/PlaceHeader';
import SaveIconEnabled from '../../../assets/heart_enabled.png';
import ScreenContainer from '../../modules/ScreenContainer';
import SaveIconDisabled from '../../../assets/heart_disabled.png';
import SelectedPlaceCard from '../../modules/SelectedPlaceCard';
import AnimatedBottomSheet from '../../modules/BottomSheet';
import NavigationPlaceCard from '../../modules/NavigationPlaceCard';
import SuccessAnimationModal from '../../modules/SuccessAnimationModal';
import useLocationScreenViewModel from '../../../services/viewModels/screens/useLocationScreenViewModel';
import FloatingButton from '../../modules/FloatingButton';
import BackIcon from '../../../assets/back_icon.png';
import {findIndexOfPlace} from '../../../services/userHandler';

const Location = () => {
  const viewModel = useLocationScreenViewModel();

  return (
    <ScreenContainer stripPadding>
      <View style={style.backButtonContainer}>
        <FloatingButton onPress={viewModel.onNavigateBack} image={BackIcon} />
      </View>
      <View style={style.saveButtonContainer}>
        <FloatingButton
          onPress={viewModel.saveOrRemove}
          image={viewModel.isSaved ? SaveIconEnabled : SaveIconDisabled}
        />
      </View>
      <PlaceHeader placeName={viewModel.searchedPlaceName} />
      <Map
        user={viewModel.userValue}
        places={viewModel.shownPlaces}
        navigationPlace={viewModel.navigationPlace}
        userLocation={viewModel.userLocation.location}
        selectedPlace={viewModel.selectedPlace}
        setSelectedPlace={viewModel.setSelectedPlace}
        setNavigationPlace={viewModel.setNavigationPlace}
        setTimeToNavigationPlace={viewModel.setTimeToNavigationPlace}
      />
      {viewModel.selectedPlace && !viewModel.placeFound && (
        <SelectedPlaceCard
          user={viewModel.userValue}
          place={viewModel.selectedPlace}
          placeNumber={findIndexOfPlace(
            viewModel.selectedPlace,
            viewModel.shownPlaces,
          ) +1}
          setSelectedPlace={viewModel.setSelectedPlace}
          setNavigationPlace={viewModel.setNavigationPlace}
        />
      )}
      {viewModel.navigationPlace && (
        <NavigationPlaceCard
          user={viewModel.userValue}
          place={viewModel.navigationPlace}
          timeToPlace={viewModel.timeToNavigationPlace}
          placeNumber={findIndexOfPlace(
            viewModel.navigationPlace,
            viewModel.shownPlaces,
          ) +1}
        />
      )}
      {viewModel.placeFound && (
        <SuccessAnimationModal onClose={viewModel.onPlaceFound} />
      )}
      {viewModel.shownPlaces && !viewModel.navigationPlace && (
        <AnimatedBottomSheet
          user={viewModel.userValue}
          places={viewModel.shownPlaces}
          onSelectItem={viewModel.setSelectedPlace}
        />
      )}
    </ScreenContainer>
  );
};
const style = StyleSheet.create({
  backButtonContainer: {
    position: 'absolute',
    top: 28,
    left: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 100,
  },
  saveButtonContainer: {
    position: 'absolute',
    top: 28,
    right: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 100,
  },
});
export default Location;
