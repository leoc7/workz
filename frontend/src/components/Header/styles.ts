import styled from 'styled-components';

export const Container = styled.div`
    height: 80px;
    background: var(--main1);
    display: flex;
    align-items: center;
    justify-content: space-between;

    & h1 {
        font-size: 24px;
        font-weight: 700;
        color: var(--white0);
        margin: 0 30px;
    }

    & nav {
        margin-top: 5px;
    }

    & a {
        color: var(--white0);
        text-decoration: none;
        font-size: 18px;
        margin-left: 30px;
        transition: all 0.2s ease;
    }

    & a:hover {
        color: var(--gray2);
    }
`;

export const Nav = styled.div`
    display: flex;
`;

export const RightBar = styled.a`
    background: var(--main2);
    width: 250px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 18px;
    color: var(--white0);
    cursor: pointer;
`;
