import React, { useState, useEffect, ReactNode, FC } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components/macro';
import { RemoveScroll } from 'react-remove-scroll';

import usePortal from '@app/shared/hooks/usePortal';

const TRANSITION_DELAY = 100;

const ModalBody = styled.div`
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  background: var(--color-white);
  box-shadow: 0px 4px 30px rgba(108, 72, 0, 0.2);
  border-radius: 4px;
`;

const ModalWraper = styled.div<{ fadeType: FadeType; isTransition: boolean }>`
  position: relative;
  opacity: ${props => (props.fadeType === 'out' ? 0 : 1)};
  transition: opacity ${props => (props.isTransition ? 0.2 : 0.01)}s linear;
  ${ModalBody} {
    transform-origin: top left;
    transform: translate(-50%, -50%);
  }
`;

const ModalOverlay = styled.div<{ background: string }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.background};
  z-index: 1000;
`;

type FadeType = 'in' | 'out';

interface IModalProps {
  children: ReactNode;
  onClose: () => void;
  className?: string;
  overlayBackground: string;
  isPortal: boolean;
  isDisableScroll: boolean;
  isTransition: boolean;
}

const Modal: FC<IModalProps> = ({
  children,
  onClose,
  className,
  overlayBackground,
  isPortal,
  isDisableScroll,
  isTransition,
}) => {
  const [fadeType, setFadeType] = useState<FadeType>('out');
  const target = usePortal('modal-root');

  useEffect(() => {
    setTimeout(() => setFadeType('in'), TRANSITION_DELAY);
  }, []);

  const transitionEnd = () => {
    if (fadeType === 'out') {
      onClose();
    }
  };

  const modalUI = (
    <ModalWraper fadeType={fadeType} onTransitionEnd={transitionEnd} isTransition={isTransition}>
      <ModalOverlay background={overlayBackground} onClick={() => setFadeType('out')} />
      <ModalBody className={className}>{children}</ModalBody>
    </ModalWraper>
  );

  let content = modalUI;

  if (isDisableScroll) {
    content = (
      <RemoveScroll enabled={true} forwardProps={true}>
        {content}
      </RemoveScroll>
    );
  }

  if (isPortal) {
    content = ReactDOM.createPortal(content, target);
  }

  return content;
};

Modal.defaultProps = {
  isDisableScroll: true,
  isPortal: true,
  isTransition: true,
  overlayBackground: 'rgba(40, 35, 14, 0.58)',
  onClose: () => {},
  children: null,
  className: undefined,
};

export default Modal;
