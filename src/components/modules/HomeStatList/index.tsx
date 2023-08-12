import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {User} from '../../../interfaces/user';
import HomeStat from '../HomeStat';
import {totalFoundPlaces} from '../../../services/userHandler';
import {localise} from '../../../services/lang/lang';

interface HomeStatListProps {
  user: User;
}
const HomeStatList = (props: HomeStatListProps) => {
  return (
    <View style={style.statContainer}>
      <HomeStat
        stat={totalFoundPlaces(props.user).toString()}
        desc={localise('VISITED')}
      />
      <HomeStat
        stat={(totalFoundPlaces(props.user) * 5).toString()}
        desc={localise('POINTS')}
      />
      <HomeStat
        stat={props.user.savedPlaces.length.toString()}
        desc={localise('LOCATIONS')}
      />
    </View>
  );
};
const style = StyleSheet.create({
  statContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
export default HomeStatList;
