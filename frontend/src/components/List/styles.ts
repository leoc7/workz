import styled from 'styled-components';

export const Container = styled.div`
    width: 300px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;

    & h1 {
        font-size: 16px;
        font-weight: bold;
        color: var(--gray0);
    }

    & small {
        margin-left: 20px;
        margin-top: 3px;
        color: var(--gray2);
        font-size: 14px;
    }
`;
