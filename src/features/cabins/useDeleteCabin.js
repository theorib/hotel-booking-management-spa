import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCabin as deleteCabinApi } from '../../services/apiCabins';
import toast from 'react-hot-toast';

function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: cabinId => deleteCabinApi(cabinId),
    onSuccess: () => {
      toast.success('Deleted successfully');
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },
    onError: err => {
      toast.error(err.message);
      console.error(err);
    },
  });
  return { isDeleting, deleteCabin };
}

export default useDeleteCabin;
