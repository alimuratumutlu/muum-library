import { useState, useEffect } from 'react';

const useModal = (initialState = false, onOpen = () => {}, onClose = () => {}) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    if (isOpen) {
      onOpen();
    } else {
      onClose();
    }
  }, [isOpen, onOpen, onClose]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const toggleModal = () => setIsOpen(prev => !prev);

  const autoClose = (timeout = 3000) => {
    setTimeout(() => {
      closeModal();
    }, timeout);
  };

  return { isOpen, openModal, closeModal, toggleModal, setModalData, modalData, autoClose };
};

export default useModal;
