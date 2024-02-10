import { useQuery } from '@tanstack/react-query';
import { getStaysTodayActivity } from '../../services/apiBookings';

function useTodayActivity() {
  const { isLoading: isLoadingTodayActivity, data: activities } = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ['today-activity'],
  });

  return { activities, isLoadingTodayActivity };
}

export default useTodayActivity;
