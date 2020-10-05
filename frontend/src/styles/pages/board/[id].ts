import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const ListsList = styled.div`
    padding: 30px 20px;
    display: flex;
`;

export const PriorityList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: -10px;
    margin-right: -10px;
    margin-bottom: 10px;
`;

interface IPriorityItemProps {
    color: 'red' | 'green' | 'yellow';
    selected?: boolean;
}

export const PriorityItem = styled.div<IPriorityItemProps>`
    height: 50px;
    width: 100%;
    margin: 10px;
    border-radius: 3px;
    border: 2px solid var(--light${p => p.color});
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gray1);
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    transition: all .2s ease;

    ${p => p.selected && css`
        background: var(--light${p => p.color});
    `}
`;
