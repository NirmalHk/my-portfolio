import { createPortal } from 'react-dom';
import React from 'react';

interface ModalPortalProps {
  children: React.ReactNode;
}

export const ModalPortal: React.FC<ModalPortalProps> = ({ children }) => {
  return createPortal(children, document.body);
};