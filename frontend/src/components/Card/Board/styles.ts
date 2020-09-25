import styled from 'styled-components';

export const Container = styled.div`
    background: var(--white0);
    border-radius: 8px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
    width: 300px;
    height: 150px;
    padding: 15px 20px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & h1 {
        font-size: 16px;
        font-weight: 700;
    }
`;

export const Content = styled.div`
    margin: 15px 0;
    color: var(--gray2);
`;

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & small {
        color: var(--gray2);
        font-size: 12px;
    }

    & a {
        font-weight: 700;
        color: var(--gray1);
        font-size: 14px;
        display: flex;
        align-items: center;
        transition: all .2s ease;
        cursor: pointer;

        & svg {
            margin-left: 5px;
            color: var(--gray1);
        }
    }

    & a:hover {
        color: var(--gray2);
    }
`;
