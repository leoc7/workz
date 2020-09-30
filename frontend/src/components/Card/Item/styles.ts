import styled from 'styled-components';

interface IPriorityProps {
    readonly priorityColor: 'red' | 'yellow' | 'green';
}

export const Container = styled.div<IPriorityProps>`
    background: var(--white0);
    padding: 15px 30px;
    border-radius: 8px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    position: relative;

    &::before {
        content: '';
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        background: var(--light${p => p.priorityColor});
        width: 9px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
`;

export const Header = styled.div`
    & small {
        color: var(--gray2);
        font-size: 12px;
    }
`;

export const Content = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: var(--gray2);
    margin-top: 10px;
    margin-bottom: 2px;
`;

export const Footer = styled.div`
    font-size: 16px;
    color: var(--gray2);
`;
