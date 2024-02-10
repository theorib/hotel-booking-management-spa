import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUpdateCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';

function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isPending: isCreating } = useMutation({
    mutationFn: cabin => createUpdateCabin(cabin),
    onSuccess: () => {
      toast.success('New cabin successfully created');
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },
    onError: err => {
      toast.error(err.message);
      console.error(err);
    },
  });
  return { createCabin, isCreating };
}

export default useCreateCabin;
