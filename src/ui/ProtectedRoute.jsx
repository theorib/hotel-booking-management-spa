import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import useUser from '../features/authentication/useUser';
import Spinner from './Spinner';

const FullPage = styled.div`
  height: 100dvh;
  background-color: var(--color-grey-50);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1. Load authenticated user
  const { isLoadingUser, isAuthenticated } = useUser();

  // 3. If there is no authenticated user, redirect to the login page
  useEffect(() => {
    if (!isAuthenticated && !isLoadingUser) navigate('/login');
  }, [isAuthenticated, isLoadingUser, navigate]);

  // 2. While Loading show a spinner
  if (isLoadingUser)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // if (!isLoadingUser && !isAuthenticated) return navigate('/login');
  // 4. if there is a user render the app

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
