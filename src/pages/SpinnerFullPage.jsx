import styled from 'styled-components';
import Spinner from '../ui/Spinner';
import Sidebar from '../ui/Sidebar';

const StyledSpinnerFullPage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100dvh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem 4.8rem;
  overflow: scroll;
`;

function SpinnerFullPage() {
  return (
    <StyledAppLayout>
      <div></div>
      <Sidebar />
      <Main>
        <StyledSpinnerFullPage>
          <Spinner />
        </StyledSpinnerFullPage>
      </Main>
    </StyledAppLayout>
  );
}

export default SpinnerFullPage;
