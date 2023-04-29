import {useNetInfo} from '@react-native-community/netinfo';
import {useEffect, useState} from 'react';

const useOnlineStatus = () => {
  const netInfo = useNetInfo();
  const [hasNetworkConnectivity, setNetworkConnectivity] = useState(true);

  useEffect(() => {
    if (netInfo.isConnected != null) {
      setNetworkConnectivity(netInfo.isConnected);
    } else {
      setNetworkConnectivity(false);
    }
  }, [netInfo.isConnected]);

  return {
    hasNetworkConnectivity,
  };
};

export default useOnlineStatus;