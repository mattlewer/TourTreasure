import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ScreenContainer from '../../modules/ScreenContainer';
import MenuToggleButton from '../../modules/MenuToggleButton';
import useActivityFeedViewModel from '../../../services/viewModels/screens/useActivityFeedViewModel';
import ActivityFeedList from '../../modules/ActivityFeedList';
import * as color from '../../../constants/color';
import {localise} from '../../../services/lang/lang';
import NoInfo from '../../modules/NoInfo';

const ActivityFeed = ({navigation}) => {
  const viewModel = useActivityFeedViewModel();
  return (
    <ScreenContainer stripPadding>
      <View style={style.header}>
        <Text style={style.headerText}>{localise('ACTIVITY_FEED')}</Text>
      </View>
      <MenuToggleButton navigation={navigation} light />
      <View style={style.inner}>
        {viewModel.orderedLocations.length > 0 ? (
          <ActivityFeedList items={viewModel.orderedLocations} />
        ) : (
          <NoInfo text={localise('NO_ACTIVITY')} />
        )}
      </View>
    </ScreenContainer>
  );
};
const style = StyleSheet.create({
  header: {
    backgroundColor: color.PRIMARY,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 50,
  },
  headerText: {
    color: color.WHITE,
    fontWeight: '600',
    fontSize: 24,
  },
  inner: {
    width: '100%',
    paddingHorizontal: 20,
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: color.WHITE,
    marginTop: -15,
  },
});
export default ActivityFeed;
