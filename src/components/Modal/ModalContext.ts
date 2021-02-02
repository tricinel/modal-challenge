import { createContext } from 'react';

// eslint-disable-next-line import/no-unused-modules
export interface ModalContextProps {
  title?: string;
  open: boolean;
  closeModal: () => void;
}

const modalContext = createContext<ModalContextProps>({
  open: true,
  // eslint-disable-next-line object-shorthand
  closeModal: () => {}
});

export default modalContext;
