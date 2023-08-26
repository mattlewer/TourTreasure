import React, {useRef} from 'react';
import StandardPageLayout from '../../modules/StandardPageLayout';
import TextInputField from '../../modules/TextInputField';
import {localise} from '../../../services/lang/lang';
import {
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import TextButton from '../../modules/TextButton';
import {Formik} from 'formik';
import useProfileViewModel from '../../../services/viewModels/screens/useProfileViewModel';
import {usernameValidation} from '../../../services/forms/changeAccountDetailsValidation';
import LoadingOverlay from '../../modules/LoadingOverlay';

const Profile = ({navigation}) => {
  const viewModel = useProfileViewModel();
  const usernameFieldRef = useRef<TextInput>(null);
  return (
    <>
      {viewModel.isLoading && <LoadingOverlay />}

      <StandardPageLayout title={localise('PROFILE')} navigation={navigation}>
        <Formik
          initialValues={viewModel.initialValues}
          validationSchema={usernameValidation}
          onSubmit={async (values, formik) => {
            viewModel.setIsLoading(true);
            await viewModel.onChangeDisplayName(values.username);
            formik.resetForm({
              values: {
                username: values.username,
                email: values.email,
                password: values.password,
              },
            });
            viewModel.setIsLoading(false);
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            dirty,
          }) => (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <View style={style.formContainer}>
                <TextInputField
                  forwardedRef={usernameFieldRef}
                  label={localise('USERNAME')}
                  value={values.username}
                  onChange={handleChange('username')}
                  onBlur={handleBlur('username')}
                  error={
                    touched.username && errors.username
                      ? errors.username
                      : undefined
                  }
                />
                <TextInputField
                  label={localise('EMAIL')}
                  value={values.email}
                  onChange={() => {}}
                  disabled
                />
                <TextInputField
                  label={localise('PASSWORD')}
                  value={values.password}
                  onChange={() => {}}
                  disabled
                />
                <View style={style.footerButton}>
                  <TextButton
                    text={localise('SAVE')}
                    type={'primary'}
                    onPress={handleSubmit}
                    disabled={!dirty}
                  />
                  <TextButton
                    text={localise('RESET_PASSWORD')}
                    type={'secondary'}
                    onPress={() => {
                      usernameFieldRef.current?.blur();
                      viewModel.onResetPassword();
                    }}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
        </Formik>
      </StandardPageLayout>
    </>
  );
};

const style = StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingTop: 50,
    gap: 15,
  },
  footerButton: {
    marginTop: 'auto',
    gap: 10,
    marginBottom: 30,
  },
});

export default Profile;
