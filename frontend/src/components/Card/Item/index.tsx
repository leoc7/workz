import React from 'react';
import { Container, Header, Content, Footer } from './styles';

export interface IItemProps {
    _id?: string;
    title: string;
    description: string;
    priority: number;
}

function getPriorityText(priority: number) {
    switch (priority) {
        case 2:
            return 'máxima';
        case 1:
            return 'média';
    }

    return 'mínima';
}

function getPriorityColor(priority: number) {
    switch (priority) {
        case 2:
            return 'red';
        case 1:
            return 'yellow';
    }

    return 'green';
}

const Item: React.FC<IItemProps> = ({
    title,
    description,
    priority,
}) => {
    return (
        <Container priorityColor={getPriorityColor(priority)}>
            <Header>
                <small>Prioridade {getPriorityText(priority)}</small>
            </Header>
            <Content>{title}</Content>
            <Footer>{description}</Footer>
        </Container>
    );
};

export default Item;
