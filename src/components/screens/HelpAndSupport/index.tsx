import React from 'react';
import StandardPageLayout from '../../modules/StandardPageLayout';
import {localise} from '../../../services/lang/lang';
import {Pressable, StyleSheet, Text} from 'react-native';
import * as color from '../../../constants/color';
import useHelpAndSupportViewModel from '../../../services/viewModels/useHelpAndSupportViewModel';
import ConfirmDeleteAccount from '../../modules/ConfirmDeleteAccount';

const HelpAndSupport = ({navigation}) => {
  const viewModel = useHelpAndSupportViewModel();
  return (
    <>
      <StandardPageLayout title={localise('SUPPORT')} navigation={navigation}>
        <Pressable
          style={style.deleteAccountContainer}
          onPress={() => viewModel.setIsDeleting(true)}>
          <Text style={style.deleteAccountText}>
            {localise('DELETE_ACCOUNT')}
          </Text>
        </Pressable>
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
  deleteAccountContainer: {
    backgroundColor: color.ERROR_RED,
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },
  deleteAccountText: {
    fontWeight: '500',
    color: color.WHITE,
  },
});
export default HelpAndSupport;
