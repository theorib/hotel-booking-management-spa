import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../services/apiAuth';

function useUser() {
  const {
    isLoading: isLoadingUser,
    data: user,
    error: userError,
  } = useQuery({
    queryKey: ['user'],
    queryFn: () => getCurrentUser(),
  });
  return {
    isLoadingUser,
    user,
    userError,
    isAuthenticated: user?.role === 'authenticated',
  };
}

export default useUser;
