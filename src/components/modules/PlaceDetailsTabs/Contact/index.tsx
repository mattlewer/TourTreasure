import React from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';
import {PlaceDetails} from '../../../../interfaces/placeDetails';
import {typography} from '../../../../constants/typography';
import {localise} from '../../../../services/lang/lang';
import * as color from '../../../../constants/color';

interface ContactProps {
  details: PlaceDetails;
}

const Contact = (props: ContactProps) => {
  const hasNoContactInfo =
    !props.details.formatted_address &&
    !props.details.international_phone_number &&
    !props.details.website;

  return (
    <View
      style={[
        style.contactInfoContainer,
        hasNoContactInfo && style.contactInfoContainerNoDetails,
      ]}>
      {props.details.formatted_address && (
        <View style={style.contactTypeContainer}>
          <Text style={style.contactTypeText}>{localise('ADDRESS')}</Text>
          <Text style={[typography.BodyReg, style.contactText]}>
            {props.details.formatted_address}
          </Text>
        </View>
      )}
      {props.details.international_phone_number && (
        <View style={style.contactTypeContainer}>
          <Text style={style.contactTypeText}>{localise('TELEPHONE')}</Text>
          <Text selectable style={[typography.BodyReg, style.contactText]}>
            {props.details.international_phone_number}
          </Text>
        </View>
      )}
      {props.details.website && (
        <View style={style.contactTypeContainer}>
          <Text style={style.contactTypeText}>{localise('WEBSITE')}</Text>
          <Text
            style={[typography.BodyReg, style.linkText]}
            onPress={() => Linking.openURL(props.details.website)}>
            {props.details.website}
          </Text>
        </View>
      )}
      {hasNoContactInfo && (
        <Text style={[typography.HeaderReg, {color: color.PRIMARY}]}>
          {localise('NO_CONTACT_INFO')}
        </Text>
      )}
    </View>
  );
};
const style = StyleSheet.create({
  contactInfoContainer: {
    padding: 20,
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  contactInfoContainerNoDetails: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactTypeContainer: {
    marginVertical: 10,
  },
  contactTypeText: {
    textAlign: 'center',
    color: color.PRIMARY,
    fontWeight: '500',
  },
  contactText:{
    textAlign: 'center',
  },
  linkText: {
    color: color.LINK_COLOR,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: color.LINK_COLOR,
    textAlign: 'center',
  },
});

export default Contact;
