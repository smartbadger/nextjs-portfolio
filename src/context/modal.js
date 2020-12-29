import { createContext } from "react";
import {useModal, Modal, ModalRoot} from 'components/modal'
// create the language context with default selected language
export const ModalContext = createContext();


// it provides the language context to app
export const ModalProvider = ({ children }) => {
  const provider = useModal();

  return (
    <ModalContext.Provider value={provider}>
        {children}
        <Modal/>
        <ModalRoot id="modal-root" />
    </ModalContext.Provider>
  );
};