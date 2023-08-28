import VersionCheck from 'react-native-version-check';
import {getPackageJson} from './getPackageJson';
import {Platform} from 'react-native';

const checkUpdate = async (): Promise<string | undefined> => {
  const packageJson = getPackageJson();
  const currVersion = packageJson['versionName'];
  const isAndroid = Platform.OS === 'android';

  let availableVersion;
  // try {
  //   if (!isAndroid) {
  //     availableVersion = await VersionCheck.getLatestVersion({
  //       provider: 'appStore',
  //       ignoreErrors: true,
  //     });
  //   } else {
  //     availableVersion = await VersionCheck.getLatestVersion({
  //       provider: 'playStore',
  //       ignoreErrors: true,
  //     });
  //   }
  // } catch (e) {
  //   availableVersion = currVersion;
  // }

  if(!availableVersion){
    availableVersion = currVersion;
  }

  let versionUpgradeAvailable = availableVersion.localeCompare(
    currVersion,
    undefined,
    {
      numeric: true,
      sensitivity: 'base',
    },
  );

  if (versionUpgradeAvailable === 1) return availableVersion;
  return undefined;
};

export default checkUpdate;
