import React from 'react';
import CrossIcon from '../Icons/CrossIcon';
import { DialogBody, DialogCloseButton, DialogHeader, DialogOverlay, DialogWindow } from './style';

interface DialogProps {
  dialogName: string,
  isOpen: boolean,
  onClose: () => void,
  children?: React.ReactNode,
}

const Dialog: React.FC<DialogProps> = ({ isOpen, children, dialogName, onClose }) => {

  return isOpen ? (
    <DialogOverlay onClick={onClose}>
      <DialogWindow onClick={(e) => e.stopPropagation()}>
        <DialogHeader>
          <b>{dialogName}</b>
          <DialogCloseButton onClick={onClose} title="Закрыть"><CrossIcon /></DialogCloseButton>
        </DialogHeader>
        <DialogBody>
          {children}
        </DialogBody>
      </DialogWindow>
    </DialogOverlay>
  ) : null
}

export default Dialog
