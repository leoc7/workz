import React from 'react';
import Item, { IItemProps } from '../Card/Item';
import { Container, Header } from './styles';

export interface IListProps {
    _id?: string;
    title: string;
    description: string;
    items: IItemProps[];
}

const List: React.FC<IListProps> = ({ title, description, items }) => {
    return (
        <Container>
            <Header>
                <h1>{title}</h1>
                <small>1 de 6</small>
            </Header>
            {description}
            {items.map(item => (
                <Item key={item._id} {...item}></Item>
            ))}
        </Container>
    );
};

export default List;
