import styled from 'styled-components';

export const Container = styled.div`
    width: 260px;
    margin-right: 50px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;

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

export const NewItemButton = styled.div`
    color: var(--gray2);
    font-weight: 700;
    font-size: 14px;
    margin-top: 20px;
    margin-left: 10px;
    transition: all .2s ease;
    display: flex;
    align-items: center;
    cursor: pointer;

    & svg {
        margin-right: 10px;
    }

    &:hover {
        color: var(--gray1);
    }
`;
