import {useRecoilValue} from 'recoil';
import {userState} from '../../../state/userState';
import {useEffect, useState} from 'react';
import {ActivityFeedItem} from '../../../interfaces/activityFeedItem';
import {getFoundPlacesDateOrdered} from '../../userHandler';

const useActivityFeedViewModel = () => {
  const userValue = useRecoilValue(userState);
  const [orderedLocations, setOrderedLocations] = useState<ActivityFeedItem[]>(
    [],
  );

  useEffect(() => {
    const results = getFoundPlacesDateOrdered(userValue.savedPlaces);
    setOrderedLocations(results);
  }, [userValue.savedPlaces]);

  return {
    orderedLocations,
  };
};

export default useActivityFeedViewModel;
