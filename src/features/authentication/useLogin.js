import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: login,
    isLoading: isLoggingIn,
    error: loginError,
  } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: user => {
      queryClient.setQueriesData(['user'], user.user);
      navigate('/dashboard', { replace: true });
    },
    onError: err => {
      console.error(err);
      toast.error(err?.message || 'Provided email or password are incorrect');
    },
  });

  return { login, isLoggingIn, loginError };
}

export default useLogin;
