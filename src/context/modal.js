import { createContext } from "react";
import {useModal, Modal} from 'components/modal'
// create the language context with default selected language
export const ModalContext = createContext({
  visible: false
});


// it provides the language context to app
export const ModalProvider = ({ children }) => {
  const provider = useModal();

  return (
    <ModalContext.Provider value={provider}>
        <Modal />
        {children}
    </ModalContext.Provider>
  );
};



export const ModalRoot = () => (
    <ModalConsumer>
      {({ component: Component, props, hideModal }) =>
        Component ? <Component {...props} onRequestClose={hideModal} /> : null
      }
    </ModalConsumer>
  );