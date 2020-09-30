import React, { useState, useEffect } from 'react';
import Item, { IItemProps } from '../Card/Item';
import { Container, Header, NewItemButton } from './styles';
import { MdAdd } from 'react-icons/md';

export interface IListProps {
    _id?: string;
    title: string;
    description: string;
    items: IItemProps[];
    onCreateButtonClick(): void;
}

const List: React.FC<IListProps> = ({
    title,
    description,
    items,
    onCreateButtonClick,
}) => {
    const [doneItemCount, setDoneItemCount] = useState(0);

    useEffect(() => {
        let count = 0;

        items.forEach(item => {
            if (item.done) count++;
        });

        setDoneItemCount(count);
    }, [items]);

    return (
        <Container>
            <Header>
                <h1>{title}</h1>
                {items.length > 0 && (
                    <small>
                        {doneItemCount} de {items.length}
                    </small>
                )}
            </Header>
            {items.map(item => (
                <Item key={item._id} {...item}></Item>
            ))}
            <NewItemButton onClick={onCreateButtonClick}>
                <MdAdd /> Novo Item
            </NewItemButton>
        </Container>
    );
};

export default List;
