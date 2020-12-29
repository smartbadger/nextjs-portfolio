import { createPortal } from "react-dom";
import { useContext, useState } from "react";
import { ModalContext } from "context/modal";
import { ModalWrapper, ModalRootEl } from './styles'

export const Modal = () => {
  const { modalContent, handleModal, modal } = useContext(ModalContext);
  

  if (modal) {
    const domNode = document.querySelector("#modal-root");
    return createPortal(
      <ModalComponent handleModal={handleModal}>
          {modalContent}
      </ModalComponent>,
      domNode
    );
  } else return null;
};

export const useModal = () => {
  let [modal, setModal] = useState(false);
  let [modalContent, setModalContent] = useState(null);

  let handleModal = (content = false) => {
    setModal(!modal);
    if (content) {
      setModalContent(content);
    }
  };

  return { modal, handleModal, modalContent };
};

const ModalComponent = ({children, handleModal}) => {
    return (
        <ModalWrapper>
            {children}
        </ModalWrapper>
    )
}

export const ModalRoot = () => (<ModalRootEl id="modal-root" />)