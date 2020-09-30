import React from 'react';
import { Container, Header, Content, Footer } from './styles';
import { MdMoreHoriz, MdArrowForward } from 'react-icons/md';

export interface IBoardProps {
    _id: string;
    title: string;
    description?: string;
}

const Board: React.FC<IBoardProps> = ({ _id, title, description }) => {
    return (
        <Container>
            <Header>
                <h1>{title}</h1>
                <MdMoreHoriz size={24} />
            </Header>
            <Content>{description}</Content>
            <Footer>
                <small>Editado há 1 dia</small>
                <a href={`/board/${_id}`}>
                    ENTRAR <MdArrowForward size={20} />
                </a>
            </Footer>
        </Container>
    );
};

export default Board;
