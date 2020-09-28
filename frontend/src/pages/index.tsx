import React from 'react';
import Board, { IBoardProps } from '../components/Card/Board';
import { Container, BoardList } from '../styles/pages';
import { GetStaticProps } from 'next';
import api from '../services/api';

interface IBoard extends IBoardProps {
    _id: string;
}

interface IProps {
    boards: IBoard[];
}

const Boards: React.FC<IProps> = ({ boards }) => {
    return (
        <Container>
            <BoardList>
                {boards.map(board => (
                    <Board key={board._id} {...board}></Board>
                ))}
            </BoardList>
        </Container>
    );
};

export const getStaticProps: GetStaticProps = async context => {
    const { data } = await api.get('/boards');
    const boards: IBoard[] = data;

    return {
        props: {
            boards,
        },
    };
};

export default Boards;
