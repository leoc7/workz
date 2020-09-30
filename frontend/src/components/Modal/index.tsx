import React from 'react';
import { Container } from './styles';

interface IProps {
    visible: boolean;
    onClose(): void;
}

const Modal: React.FC<IProps> = ({ visible, onClose }) => {
    return (
        <Container visible={visible}>
            <div>a</div>
        </Container>
    );
};

export default Modal;
