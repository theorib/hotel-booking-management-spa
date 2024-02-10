import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../../services/apiCabins';

function useCabins() {
  const {
    isLoading: isLoadingCabins,
    data: cabins,
    error: cabinsError,
  } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins,
  });
  return { isLoadingCabins, cabins, cabinsError };
}

export default useCabins;
