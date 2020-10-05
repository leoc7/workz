import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    transition: all 0.2s ease;
    background: var(--white0);
    border-radius: 8px;
    width: 400px;
    padding: 30px 20px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
    color: var(--gray0);

    & svg {
        color: var(--gray0);
        transition: all 0.2s ease;
        font-size: 24px;
        cursor: pointer;

        &:hover {
            color: var(--gray2);
        }
    }

    border-bottom: 1px solid var(--gray3);
    padding-bottom: 20px;
`;
export const Content = styled.div`
    margin: 20px 0;
`;
export const Footer = styled.div``;
