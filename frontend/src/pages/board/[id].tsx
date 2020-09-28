import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import List, { IListProps } from '../../components/List';
import { Container, ListsList } from '../../styles/pages/board/[id]';
import api from '../../services/api';

interface IProps {}

const Board: React.FC<IProps> = () => {
    const router = useRouter();
    const [lists, setLists] = useState<IListProps[]>([]);

    useEffect(() => {
        async function getData() {
            const { data } = await api.get(`/lists/${router.query.id}`);

            const lists: IListProps[] = data;
            setLists(lists);
        }
        getData();
    }, []);

    return (
        <Container>
            <ListsList>
                {lists.map(list => (
                    <List key={list._id} {...list}></List>
                ))}
            </ListsList>
        </Container>
    );
};

export default Board;
