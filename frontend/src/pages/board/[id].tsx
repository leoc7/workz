import React, { useRef, useState } from 'react';
import { NextPage } from 'next';
import List, { IListProps as IList } from '../../components/List';
import {
    Container,
    ListsList,
    PriorityList,
    PriorityItem,
} from '../../styles/pages/board/[id]';
import api from '../../services/api';
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import {
    Form,
    InputText,
    InputTextarea,
    Button,
    Label,
} from '../../styles/form';
import { FormHandles, SubmitHandler } from '@unform/core';
import * as Yup from 'yup';

interface IProps {
    lists: IList[];
    boardId: string;
}

interface IFormData {
    title: string;
    description?: string;
}

const Board: NextPage<IProps> = ({ lists: _lists, boardId }) => {
    const [lists, setLists] = useState(_lists);
    const [isCreateItemModalVisible, setCreateItemModalVisible] = useState(
        false
    );
    const [selectedPriority, setSelectedPriority] = useState('green');
    const [selectedListId, setSelectedListId] = useState(null);
    const formRef = useRef<FormHandles>(null);

    function getPriorityId() {
        return ['green', 'yellow', 'red'].indexOf(selectedPriority);
    }

    async function reloadLists() {
        const { data } = await api.get(`/lists/${boardId}`);

        setLists(data);
    }

    const handleSubmit: SubmitHandler<IFormData> = async data => {
        try {
            const schema = Yup.object().shape({
                title: Yup.string().required('Digite o título'),
                description: Yup.string(),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            api.post(`/items/${selectedListId}/`, {
                priority: getPriorityId(),
                ...data,
            })
                .then(() => {
                    reloadLists();
                })
                .catch(err => {
                    alert('Ocorreu um erro!');
                })
                .finally(() => {
                    setCreateItemModalVisible(false);
                });
        } catch (err) {
            const errors = {};
            err.inner.forEach(error => {
                errors[error.path] = error.message;
            });
            formRef.current.setErrors(errors);
        }
    };

    return (
        <>
            <Modal
                visible={isCreateItemModalVisible}
                title='Criar novo item'
                onClose={() => setCreateItemModalVisible(false)}>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Label>Título</Label>
                    <Input
                        name='title'
                        as={<InputText placeholder='Digite o título do item' />}
                    />
                    <Label>Descrição</Label>
                    <Input
                        name='description'
                        as={
                            <InputTextarea
                                placeholder='Digite a descrição do item (opcional)'
                                height={150}
                            />
                        }
                    />
                    <Label>Prioridade</Label>
                    <PriorityList>
                        {[
                            {
                                color: 'green',
                                text: 'Mínima',
                            },
                            {
                                color: 'yellow',
                                text: 'Média',
                            },
                            {
                                color: 'red',
                                text: 'Máxima',
                            },
                        ].map(({ color, text }) => (
                            <PriorityItem
                                key={color}
                                color={color}
                                selected={selectedPriority == color}
                                onClick={() => setSelectedPriority(color)}>
                                {text}
                            </PriorityItem>
                        ))}
                    </PriorityList>
                    <Button type='submit'>Criar</Button>
                </Form>
            </Modal>
            <Container>
                <ListsList>
                    {lists.map(list => (
                        <List
                            onCreateButtonClick={() => {
                                setCreateItemModalVisible(true);
                                setSelectedListId(list._id);
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

    return { lists, boardId: query.id };
};

export default Board;
