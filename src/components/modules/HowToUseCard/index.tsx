import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {typography} from '../../../constants/typography';
import * as color from '../../../constants/color';

interface HowToUseCardProps {
  image: HTMLImageElement;
  title: string;
  content: string;
}

const HowToUseCard = (props: HowToUseCardProps) => {
  return (
    <View style={style.slideContainer}>
      <View style={style.howToCard}>
        <Image source={props.image} style={style.logo} />
        <View style={style.textContainer}>
          <Text style={[typography.HeaderReg, style.headerText]}>
            {props.title}
          </Text>
          <Text style={[typography.BodyReg, style.contentText]}>
            {props.content}
          </Text>
        </View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  slideContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  howToCard: {
    width: '80%',
    height: '90%',
    margin: 20,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#fff7f9',
    alignItems: 'center',
    elevation: 5,
    shadowOffset: {width: 0, height: 2},
    shadowColor: '#000',
    shadowOpacity: 1,
  },
  logo: {
    height: 300,
    width: 140,
    resizeMode: 'contain',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: color.PRIMARY,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: color.PRIMARY,
    textAlign: 'center',
    paddingBottom: 20,
    fontWeight: '600',
  },
  contentText: {
    color: color.PRIMARY,
    textAlign: 'center',
  },
});

export default HowToUseCard;
