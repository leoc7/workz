import React from 'react';
import Board, { IBoardProps as IBoard } from '../components/Card/Board';
import { Container, BoardList } from '../styles/pages';
import api from '../services/api';
import { NextPage } from 'next';

interface IProps {
    boards: IBoard[];
}

const Boards: NextPage<IProps> = ({ boards }) => {
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

Boards.getInitialProps = async () => {
    const { data } = await api.get('/boards');
    const boards: IBoard[] = data;

    return {
        boards,
    };
};

export default Boards;
