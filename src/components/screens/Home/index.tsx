import React from 'react';
import * as color from '../../../constants/color';
import {View, StyleSheet, Text} from 'react-native';
import {totalFoundPlaces} from '../../../services/userHandler';
import {typography} from '../../../constants/typography';
import {localise} from '../../../services/lang/lang';
import SavedPlaceListItem from '../../modules/SavedPlaceListItem';
import ScreenContainer from '../../modules/ScreenContainer';
import HomeStatePoints from '../../modules/HomeStatPoints';
import TextInputField from '../../modules/TextInputField';
import LinearGradient from 'react-native-linear-gradient';
import HomeStatCard from '../../modules/HomeStatCard';
import useHomeScreenViewModel from '../../../services/viewModels/screens/useHomeScreenViewModel';

const HomeScreen = () => {
  const viewModel = useHomeScreenViewModel();
  return (
    <ScreenContainer scrollable stripPadding>
      <View style={style.contents}>
        <Text style={style.headerText}>
          {localise('WELCOME_USER')}
          {viewModel.userValue.name}
        </Text>
        <LinearGradient
          colors={['#D63357', '#e4768f']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={style.headerAndStatsContainer}>
          <HomeStatCard
            stat={totalFoundPlaces(viewModel.userValue).toString()}
            desc={localise('VISITED')}
          />
          <HomeStatePoints
            stat={viewModel.points.toString()}
            desc={localise('POINTS')}
          />
          <HomeStatCard
            stat={viewModel.userValue.savedPlaces.length.toString()}
            desc={localise('LOCATIONS')}
          />
        </LinearGradient>
        <View style={{width: '90%'}}>
          <View style={style.inputFieldContainer}>
            <TextInputField
              isSearch
              label={localise('SEARCH_LOCATION')}
              onChange={viewModel.setEnteredLocation}
              onSubmit={viewModel.onSearchNew}
            />
          </View>
          <Text style={[style.text, {alignSelf: 'flex-start'}]}>
            {localise('SAVED_PLACES')}
          </Text>
          {viewModel.userValue.savedPlaces.length > 0 ? (
            <View style={style.savedPlacesListContainer}>
              {viewModel.userValue.savedPlaces.map((item, index) => {
                return (
                  <SavedPlaceListItem
                    key={index}
                    name={item.name}
                    onPress={() => viewModel.onSearchLocation(item.name)}
                    visitedPlaces={item.visitedPlaces.length}
                    totalPlaces={item.places.length}
                  />
                );
              })}
            </View>
          ) : (
            <View style={style.noSavedPlacesContainer}>
              <Text style={[typography.BodyReg, {color: color.PRIMARY}]}>
                {localise('NO_SAVED_PLACES')}
              </Text>
            </View>
          )}
        </View>
      </View>
    </ScreenContainer>
  );
};
const style = StyleSheet.create({
  contents: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  text: {
    color: color.TEXT_DARK,
  },
  headerText: {
    color: color.TEXT_DARK,
    fontSize: 48,
    paddingVertical: 50,
    alignSelf: 'flex-start',
    paddingLeft: 16,
  },
  headerAndStatsContainer: {
    zIndex: 10,
    width: '97%',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: color.PRIMARY,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    paddingHorizontal: 10,
    paddingTop: 20,
    marginBottom: 40,
    paddingBottom: 20,
    elevation: 10,
  },
  statText: {
    color: color.PRIMARY,
  },
  inputFieldContainer: {
    paddingBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  savedPlacesListContainer: {
    flex: 1,
    width: '100%',
    margin: 0,
  },
  noSavedPlacesContainer: {
    flex: 1,
    height: 140,
    borderRadius: 4,
    width: '100%',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.PRIMARY + '11',
  },
});
export default HomeScreen;
