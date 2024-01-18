import React from 'react';

const useDialog = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onOpen = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const onClose = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  return { isOpen, onOpen, onClose };
};

export default useDialog;
