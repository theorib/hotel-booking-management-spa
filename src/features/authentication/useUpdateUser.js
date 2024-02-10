import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCurrentUser as updateCurrentUserApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isPending: isUpdatingUser } = useMutation({
    mutationFn: updateCurrentUserApi,
    onSuccess: ({ user }) => {
      toast.success('User account successfully updated');
      queryClient.setQueryData(['user'], user);
      // queryClient.invalidateQueries({
      //   queryKey: ['user'],
      // });
    },
    onError: () => {
      toast.error('Error updating user');
    },
  });
  return { updateUser, isUpdatingUser };
}

export default useUpdateUser;
