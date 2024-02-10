import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateSettings as updateSettingsApi } from '../../services/apiSettings';
import toast from 'react-hot-toast';

function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { mutate: updateSettings, isPending: isUpdatingSettings } = useMutation(
    {
      mutationFn: updateSettingsApi,
      onSuccess: () => {
        toast.success('Settings successfully updated');
        queryClient.invalidateQueries({
          queryKey: ['settings'],
        });
      },
      onError: err => {
        toast.error(err.message);
        console.error(err);
      },
    }
  );

  return { updateSettings, isUpdatingSettings };
}

export default useUpdateSettings;
