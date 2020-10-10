import React, { useRef } from 'react';
import Modal from '../../Modal';
import { FormHandles, SubmitHandler } from '@unform/core';
import {
    Form,
    Label,
    InputText,
    InputTextarea,
    Button,
} from '../../../styles/form';
import Input from '../../Input';
import * as Yup from 'yup';
import api from '../../../services/api';

interface IFormData {
    title: string;
    description?: string;
}

interface ICreatedList {
    _id: string;
}

interface IProps {
    visible: boolean;
    boardId: string;
    onClose(): void;
    onSubmit(): void;
}

const ListCreationModal: React.FC<IProps> = ({
    visible,
    boardId,
    onClose,
    onSubmit,
}) => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit: SubmitHandler<IFormData> = async data => {
        try {
            const schema = Yup.object().shape({
                title: Yup.string().required('Digite o título'),
                description: Yup.string(),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            api.post<ICreatedList>(`/lists/${boardId}`, {
                ...data,
            })
                .then(() => {
                    onSubmit();
                })
                .catch(err => {
                    alert('Ocorreu um erro!');
                    console.log(err);
                })
                .finally(() => {
                    onClose();
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
        <Modal visible={visible} title='Criar nova Lista' onClose={onClose}>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <Label>Título</Label>
                <Input
                    name='title'
                    as={<InputText placeholder='Digite o título da lista' />}
                />
                <Label>Descrição</Label>
                <Input
                    name='description'
                    as={
                        <InputTextarea
                            placeholder='Digite a descrição da lista (opcional)'
                            height={150}
                        />
                    }
                />

                <Button type='submit'>Criar</Button>
            </Form>
        </Modal>
    );
};

export default ListCreationModal;
