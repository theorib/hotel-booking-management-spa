import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../../utils/constants';

function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // Filtering
  const filterField = 'status';
  const filterValue = searchParams.get(filterField);

  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: filterField, value: filterValue };

  // Sorting
  const sortByParam = searchParams.get('sortBy') || 'startDate-desc';
  const [sortField, sortValue] = sortByParam.split('-');
  const sortBy =
    !sortField || !sortValue
      ? null
      : {
          field: sortField,
          value: sortValue,
        };

  // Pagination
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

  // Query
  const {
    isLoading: isLoadingBookings,
    data: { data: bookings, count } = {},
    error: bookingsError,
  } = useQuery({
    queryKey: ['bookings', filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  // Pre-fetching

  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sortBy, page, count],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });
  }
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sortBy, page, count],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });
  }

  return { isLoadingBookings, bookings, count, bookingsError };
}

export default useBookings;
