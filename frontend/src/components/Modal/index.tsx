import React from 'react';
import { Container, Header, Content, Footer } from './styles';
import { AnimatePresence } from 'framer-motion';
import { MdClose } from 'react-icons/md';

interface IProps {
    title?: string;
    visible: boolean;
    onClose(): void;
}

const Modal: React.FC<IProps> = ({ children, title, visible, onClose }) => {
    return (
        <AnimatePresence>
            <Container
                variants={{
                    visible: {
                        opacity: 1,
                        display: 'block',
                    },
                    hidden: {
                        opacity: 0,
                        transitionEnd: {
                            display: 'none',
                        },
                    },
                }}
                initial='hidden'
                animate={visible ? 'visible' : 'hidden'}>
                <Header>
                    {title} <MdClose onClick={onClose} />
                </Header>
                <Content>{children}</Content>
            </Container>
        </AnimatePresence>
    );
};

export default Modal;
