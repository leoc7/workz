import React, { useRef } from 'react';
import { useRouter } from 'next/router';
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
import { AxiosResponse } from 'axios';

interface IFormData {
    title: string;
    description?: string;
}

interface ICreatedBoard {
    _id: string;
}

interface IProps {
    visible: boolean;
    onClose(): void;
}

const BoardCreationModal: React.FC<IProps> = ({ visible, onClose }) => {
    const router = useRouter();
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

            api.post<ICreatedBoard>(`/boards/`, {
                ...data,
            })
                .then((response: AxiosResponse<ICreatedBoard>) => {
                    const { data } = response;

                    router.push(`/board/${data._id}`);
                })
                .catch(err => {
                    alert('Ocorreu um erro!');
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
        <Modal visible={visible} title='Criar nova Board' onClose={onClose}>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <Label>Título</Label>
                <Input
                    name='title'
                    as={<InputText placeholder='Digite o título da board' />}
                />
                <Label>Descrição</Label>
                <Input
                    name='description'
                    as={
                        <InputTextarea
                            placeholder='Digite a descrição da board (opcional)'
                            height={150}
                        />
                    }
                />

                <Button type='submit'>Criar</Button>
            </Form>
        </Modal>
    );
};

export default BoardCreationModal;
