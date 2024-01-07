import React from 'react';
import {findIndexOfPlace, hasSavedPlace} from '../../../utils/userHandler';
import Map from '../../modules/Map';
import ScreenContainer from '../../modules/ScreenContainer';
import SelectedPlaceCard from '../../modules/SelectedPlaceCard';
import AnimatedBottomSheet from '../../modules/BottomSheet';
import NavigationPlaceCard from '../../modules/NavigationPlaceCard';
import SuccessAnimationModal from '../../modules/SuccessAnimationModal';
import useLocationScreenViewModel from '../../../services/viewModels/screens/useLocationScreenViewModel';
import LocationScreenHeader from '../../modules/LocationScreenHeader';

const Location = () => {
  const viewModel = useLocationScreenViewModel();
  return (
    <>
      <LocationScreenHeader
        isSaved={
          hasSavedPlace(viewModel.userValue, viewModel.searchedPlaceName) >= 0
        }
        saveOrRemove={viewModel.saveOrRemove}
        onNavigateBack={viewModel.onNavigateBack}
        searchedPlaceName={viewModel.searchedPlaceName}
      />
      <ScreenContainer stripPadding>
        <Map
          user={viewModel.userValue}
          places={viewModel.shownPlaces}
          userLocation={viewModel.userLocation.location}
          selectedPlace={viewModel.selectedPlace}
          navigationPlace={viewModel.navigationPlace}
          searchedPlaceName={viewModel.searchedPlaceName}
          setSelectedPlace={viewModel.setSelectedPlace}
          setNavigationPlace={viewModel.onSetNavigationPlace}
          setTimeToNavigationPlace={viewModel.setTimeToNavigationPlace}
        />
        {viewModel.selectedPlace && !viewModel.placeFound && (
          <SelectedPlaceCard
            user={viewModel.userValue}
            place={viewModel.selectedPlace}
            placeNumber={
              findIndexOfPlace(viewModel.selectedPlace, viewModel.shownPlaces) +
              1
            }
            setSelectedPlace={viewModel.setSelectedPlace}
            onViewPlaceDetails={viewModel.onViewPlaceDetails}
            setNavigationPlace={viewModel.onSetNavigationPlace}
            searchedPlaceName={viewModel.searchedPlaceName}
          />
        )}
        {viewModel.navigationPlace && (
          <NavigationPlaceCard
            user={viewModel.userValue}
            place={viewModel.navigationPlace}
            timeToPlace={viewModel.timeToNavigationPlace}
            placeNumber={
              findIndexOfPlace(
                viewModel.navigationPlace,
                viewModel.shownPlaces,
              ) + 1
            }
            setNavigationPlace={viewModel.onSetNavigationPlace}
            searchedPlaceName={viewModel.searchedPlaceName}
          />
        )}
        {viewModel.placeFound && (
          <SuccessAnimationModal onClose={viewModel.onPlaceFound} />
        )}
        {viewModel.shownPlaces &&
          !viewModel.navigationPlace &&
          !viewModel.selectedPlace && (
            <AnimatedBottomSheet
              user={viewModel.userValue}
              places={viewModel.shownPlaces}
              onSelectItem={viewModel.setSelectedPlace}
              searchedPlaceName={viewModel.searchedPlaceName}
            />
          )}
      </ScreenContainer>
    </>
  );
};
export default Location;
