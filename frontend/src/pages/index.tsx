import React from 'react';
import Board from '../components/Card/Board';
import { Container, BoardList } from '../styles/pages';

export default function Boards() {
    return (
        <Container>
            <BoardList>
                <Board></Board>
            </BoardList>
        </Container>
    );
}
