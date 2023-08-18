import {useRecoilValue} from 'recoil';
import {userState} from '../../../state/userState';
import {useEffect, useState} from 'react';
import {ActivityFeedItem} from '../../../interfaces/activityFeedItem';
import {getFoundPlacesDateOrdered} from '../../userHandler';
import {createEpoch} from '../../dateHandler';

const useActivityFeedViewModel = () => {
  const userValue = useRecoilValue(userState);
  const [orderedLocations, setOrderedLocations] = useState<ActivityFeedItem[]>(
    [],
  );

  useEffect(() => {
    const results = getFoundPlacesDateOrdered(userValue.savedPlaces).sort(
      (a, b) => createEpoch(b.title) - createEpoch(a.title),
    );
    setOrderedLocations(results);
  }, [userValue.savedPlaces]);

  return {
    orderedLocations,
  };
};

export default useActivityFeedViewModel;
