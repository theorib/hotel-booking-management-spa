import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUpdateCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';

function useUpdateCabin() {
  const queryClient = useQueryClient();

  const { mutate: updateCabin, isPending: isUpdatingCabin } = useMutation({
    mutationFn: ({ data, updateId }) => createUpdateCabin(data, updateId),
    onSuccess: () => {
      toast.success('Cabin successfully edited');
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },
    onError: err => {
      toast.error(err.message);
      console.error(err);
    },
  });

  return { updateCabin, isUpdatingCabin };
}

export default useUpdateCabin;
