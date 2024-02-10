import { useMutation } from '@tanstack/react-query';
import { signUp as signUpApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

function useSignUp() {
  const {
    mutate: signUp,
    isLoading: isSigningUp,
    error,
  } = useMutation({
    mutationFn: signUpApi,
    onSuccess: user => {
      toast.success(
        `Account successfully created. Please verify the new account from your user.email inbox`
      );
    },
    onError: error => {
      //
    },
  });

  return { signUp, isSigningUp, error };
}

export default useSignUp;
