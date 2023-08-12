import React from 'react';
import * as color from '../../../constants/color';
import {View, StyleSheet, Text} from 'react-native';
import {localise} from '../../../services/lang/lang';
import ScreenContainer from '../../modules/ScreenContainer';
import useHomeScreenViewModel from '../../../services/viewModels/screens/useHomeScreenViewModel';
import HomeStatList from '../../modules/HomeStatList';
import SavedLocationList from '../../modules/SavedLocationList';
import PopularLocationList from '../../modules/PopularLocationList';
import PlaceSearchField from '../../modules/PlaceSearchField';
import Avatar from '../../modules/Avatar';
import MenuToggleButton from '../../modules/MenuToggleButton';

const HomeScreen = () => {
  const viewModel = useHomeScreenViewModel();
  return (
    <ScreenContainer scrollable stripPadding>
      <MenuToggleButton navigation={viewModel.navigation} light />
      <View style={style.header}>
        <View style={style.greetingContainer}>
          <Avatar name={viewModel.userValue.name} />
          <View style={style.greetingText}>
            <Text style={{color: color.WHITE}}>{localise('WELCOME_USER')}</Text>
            <Text style={style.nameText}>{viewModel.userValue.name}</Text>
          </View>
        </View>
        <View style={style.inputFieldContainer}>
          <PlaceSearchField
            onChange={viewModel.setEnteredLocation}
            onSearch={viewModel.onSearchNew}
          />
        </View>
        <View style={style.statContainer}>
          <HomeStatList user={viewModel.userValue} />
        </View>
      </View>
      <View style={style.inner}>
        <View style={style.popularLocationContainer}>
          <PopularLocationList
            locations={viewModel.popularLocations}
            onSearchLocation={viewModel.onSearchLocation}
          />
        </View>
        <Text style={[style.text, {alignSelf: 'flex-start'}]}>
          {localise('SAVED_PLACES')}
        </Text>
        <SavedLocationList
          user={viewModel.userValue}
          onSearchLocation={viewModel.onSearchLocation}
        />
      </View>
    </ScreenContainer>
  );
};
const style = StyleSheet.create({
  header: {
    backgroundColor: color.PRIMARY,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
  },
  greetingContainer: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
  greetingText: {
    paddingLeft: 10,
  },
  nameText: {
    color: color.WHITE,
    fontWeight: '600',
    fontSize: 24,
  },
  statContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
  },
  inputFieldContainer: {
    width: '100%',
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 1,
    paddingBottom: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: color.WHITE,
    marginTop: -15,
  },
  text: {
    color: color.TEXT_DARK,
  },
  popularLocationContainer: {
    paddingBottom: 30,
  },
});
export default HomeScreen;
