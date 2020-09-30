import React, { useState } from 'react';
import { NextPage } from 'next';
import List, { IListProps as IList } from '../../components/List';
import { Container, ListsList } from '../../styles/pages/board/[id]';
import api from '../../services/api';
import Modal from '../../components/Modal';

interface IProps {
    lists: IList[];
}

const Board: NextPage<IProps> = ({ lists }) => {
    const [isCreateItemModalVisible, setCreateItemModalVisible] = useState(
        false
    );

    return (
        <>
            <Modal
                visible={isCreateItemModalVisible}
                onClose={() => setCreateItemModalVisible(false)}></Modal>
            <Container>
                <ListsList>
                    {lists.map(list => (
                        <List
                            onCreateButtonClick={() => {
                                setCreateItemModalVisible(true);
                            }}
                            key={list._id}
                            {...list}></List>
                    ))}
                </ListsList>
            </Container>
        </>
    );
};

Board.getInitialProps = async ({ query }) => {
    const { data } = await api.get(`/lists/${query.id}`);

    const lists: IList[] = data;

    return { lists };
};

export default Board;
