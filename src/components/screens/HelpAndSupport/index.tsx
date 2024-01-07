import React from 'react';
import StandardPageLayout from '../../modules/StandardPageLayout';
import {localise} from '../../../services/lang/lang';
import {Linking, Pressable, StyleSheet, Text, View} from 'react-native';
import * as color from '../../../constants/color';
import useHelpAndSupportViewModel from '../../../services/viewModels/screens/useHelpAndSupportViewModel';
import ConfirmDeleteAccount from '../../modules/ConfirmDeleteAccount';
import TextButton from '../../modules/TextButton';
import HowToUse from '../HowToUse';

const HelpAndSupport = ({navigation}) => {
  const viewModel = useHelpAndSupportViewModel();
  return (
    <>
      <StandardPageLayout title={localise('SUPPORT')} navigation={navigation}>
        <View style={{flex: 1}}>
          <HowToUse hideButtons />
        </View>
        <View style={style.btnContainer}>
          <TextButton
            type="secondary"
            text="Contact support"
            onPress={() =>
              Linking.openURL(
                `mailto:${localise(
                  'SUPPORT_EMAIL',
                )}?subject=${encodeURIComponent(
                  localise('SUPPORT_EMAIL_SUBJECT'),
                )}`,
              )
            }
          />
          <Pressable
            style={style.deleteAccountContainer}
            onPress={() => viewModel.setIsDeleting(true)}>
            <Text style={style.deleteAccountText}>
              {localise('DELETE_ACCOUNT')}
            </Text>
          </Pressable>
        </View>
      </StandardPageLayout>
      {viewModel.isDeleting && (
        <ConfirmDeleteAccount
          setOpen={viewModel.setIsDeleting}
          onConfirm={viewModel.deleteAccount}
        />
      )}
    </>
  );
};
const style = StyleSheet.create({
  btnContainer: {
    marginTop: 'auto',
    paddingBottom: 20,
    gap: 20,
  },
  deleteAccountContainer: {
    backgroundColor: color.ERROR_RED,
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteAccountText: {
    fontWeight: '500',
    color: color.WHITE,
  },
});
export default HelpAndSupport;
