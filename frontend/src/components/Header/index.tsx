import React from 'react';

import { Container, Nav, RightBar } from './styles';

const Header: React.FC = () => {
    return (
        <Container>
            <Nav>
                <h1>Workz</h1>
                <nav>
                    <a href='/'>Minhas boards</a>
                </nav>
            </Nav>

            <RightBar>Nova Board</RightBar>
        </Container>
    );
};

export default Header;
