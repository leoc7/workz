import React, { useState } from 'react';
import { NextPage } from 'next';
import List, { IListProps as IList } from '../../components/List';
import { Container, ListsList } from '../../styles/pages/board/[id]';
import api from '../../services/api';
import Modal from '../../components/Modal';
import { Form, InputText, Label } from '../../styles/form';

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
                title='Criar novo item'
                onClose={() => setCreateItemModalVisible(false)}>
                <Form>
                    <Label>Título</Label>
                    <InputText placeholder='Digite o título do item' />
                    <Label>Descrição</Label>
                    <InputText placeholder='Digite a descrição do item (opcional)' />
                </Form>
            </Modal>
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
