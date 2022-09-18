import React, { useEffect } from 'react';
import CrossIcon from '../Icons/CrossIcon';
import { DialogBody, DialogCloseButton, DialogHeader, DialogOverlay, DialogWindow } from './style';

interface DialogProps {
  dialogName: string,
  isOpen: boolean,
  onClose: () => void,
  children?: React.ReactNode,
}

const Dialog: React.FC<DialogProps> = ({ isOpen, children, dialogName, onClose }) => {


  const closeDialogByPressEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', closeDialogByPressEsc);
    return () => document.removeEventListener('keydown', closeDialogByPressEsc);
  })

  return isOpen ? (
    <DialogOverlay onClick={onClose}>
      <DialogWindow onClick={(e) => e.stopPropagation()}>
        <DialogHeader>
          <b>{dialogName}</b>
          <DialogCloseButton onClick={onClose}><CrossIcon /></DialogCloseButton>
        </DialogHeader>
        <DialogBody>
          {children}
        </DialogBody>
      </DialogWindow>
    </DialogOverlay>
  ) : null
}

export default Dialog
