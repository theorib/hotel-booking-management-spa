import { useQuery } from '@tanstack/react-query';
import { getSettings } from '../../services/apiSettings';

function useSettings() {
  const {
    isLoading: isLoadingSettings,
    data: settings,
    error: settingsError,
  } = useQuery({
    queryKey: ['settings'],
    queryFn: () => getSettings(),
  });
  return { isLoadingSettings, settings, settingsError };
}

export default useSettings;
