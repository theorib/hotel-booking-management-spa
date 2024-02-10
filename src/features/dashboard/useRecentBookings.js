import { useQuery } from '@tanstack/react-query';
import { subDays } from 'date-fns';
import { useSearchParams } from 'react-router-dom';
import { getBookingsAfterDate } from '../../services/apiBookings';
import { getToday } from '../../utils/helpers';

function useRecentBookings() {
  const [searchParams] = useSearchParams();
  const numDays = !searchParams.get('last')
    ? 7
    : Number(searchParams.get('last'));
  const queryDate = subDays(getToday(), numDays).toISOString();

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ['bookings', `last-${numDays}`, queryDate],
    queryFn: () => getBookingsAfterDate(queryDate),
  });

  return { isLoading, bookings, error };
}

export default useRecentBookings;
