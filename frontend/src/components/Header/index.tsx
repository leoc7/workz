import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { Container, Nav, RightBar } from './styles';
import BoardCreationModal from '../Modal/BoardCreation';
import ListCreationModal from '../Modal/ListCreation';

const Header: React.FC = () => {
    const [isCreateBoardModalVisible, setCreateBoardModalVisible] = useState(
        false
    );
    const [isCreateListModalVisible, setCreateListModalVisible] = useState(
        false
    );
    const router = useRouter();
    const isBoard = router.pathname.startsWith('/board');

    function openModal() {
        if (isBoard) {
            setCreateListModalVisible(true);
        } else {
            setCreateBoardModalVisible(true);
        }
    }

    return (
        <>
            <BoardCreationModal
                visible={isCreateBoardModalVisible}
                onClose={() => setCreateBoardModalVisible(false)}
            />
            <ListCreationModal
                visible={isCreateListModalVisible}
                boardId={router.query.id}
                onClose={() => setCreateListModalVisible(false)}
                onSubmit={() => console.log('ofda-se')}
            />
            <Container>
                <Nav>
                    <h1>Workz</h1>
                    <nav>
                        <a href='/'>Minhas boards</a>
                    </nav>
                </Nav>

                <RightBar onClick={openModal}>
                    {isBoard ? 'Nova Lista' : 'Nova Board'}
                </RightBar>
            </Container>
        </>
    );
};

export default Header;
