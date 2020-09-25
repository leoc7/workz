import React from 'react';
import { Container, Header, Content, Footer } from './styles';
import { MdMoreHoriz, MdArrowForward } from 'react-icons/md';

const Board: React.FC = () => {
    return (
        <Container>
            <Header>
                <h1>Afazeres domésticos</h1>
                <MdMoreHoriz size={24} />
            </Header>
            <Content>
                Aqui reuno todas as tarefas que devo realizar em casa...
            </Content>
            <Footer>
                <small>Editado há 1 dia</small>
                <a>
                    ENTRAR <MdArrowForward size={20} />
                </a>
            </Footer>
        </Container>
    );
};

export default Board;
