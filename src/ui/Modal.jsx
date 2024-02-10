import { cloneElement, createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';
// import { HiXMark } from 'react-icons/hi2';
import styled from 'styled-components';
import useOutsideMouseClick from '../hooks/useOutsideMouseClick';

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
  overflow: scroll;
  max-height: 90dvh;
  max-width: 90dvw;
  /* width: 60%; */
`;

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState('null');

  const close = () => setOpenName('');
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ open, close, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Window({ children, windowName }) {
  const { close, openName } = useContext(ModalContext);

  const isOpen = openName === windowName;

  const { ref } = useOutsideMouseClick(close);

  if (!isOpen) return null;

  const cloneChildren = function () {
    if (children?.map) {
      return children.map((child, i) =>
        cloneElement(child, { onCloseModal: close, key: i })
      );
    } else return cloneElement(children, { onCloseModal: close });
  };

  return createPortal(
    <StyledOverlay>
      <StyledModal ref={ref}>
        <div>{cloneChildren(children)}</div>
      </StyledModal>
    </StyledOverlay>,
    document.body
  );
}

function Open({ children, opensWindow }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindow) });
}

function Close({ children }) {
  const { close } = useContext(ModalContext);

  if (!children)
    return (
      <Button onClick={close}>
        <HiXMark />
      </Button>
    );

  return cloneElement(children, { onClick: close });
}

Modal.Open = Open;
Modal.Window = Window;
Modal.Close = Close;

export default Modal;
