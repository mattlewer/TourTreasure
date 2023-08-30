import React from 'react';
import useActivityFeedViewModel from '../../../services/viewModels/screens/useActivityFeedViewModel';
import ActivityFeedList from '../../modules/ActivityFeedList';
import {localise} from '../../../services/lang/lang';
import NoInfo from '../../modules/NoInfo';
import StandardPageLayout from '../../modules/StandardPageLayout';

const ActivityFeed = ({navigation}) => {
  const viewModel = useActivityFeedViewModel();
  return (
    <StandardPageLayout
      preventScroll
      title={localise('ACTIVITY_FEED')}
      navigation={navigation}>
      {viewModel.orderedLocations.length > 0 ? (
        <ActivityFeedList items={viewModel.orderedLocations} />
      ) : (
        <NoInfo text={localise('NO_ACTIVITY')} />
      )}
    </StandardPageLayout>
  );
};

export default ActivityFeed;
