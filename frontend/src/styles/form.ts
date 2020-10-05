import styled, { css } from 'styled-components';
import { Form as Unform } from '@unform/web';

export const InputText = styled.input.attrs({
    type: 'text',
})`
    background: var(--white0);
    border: 2px solid var(--gray3);
    border-radius: 3px;
    padding: 10px;
    color: var(--gray0);
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 10px;
    transition: all 0.2s ease;

    &::placeholder {
        color: var(--gray3);
        font-family: 'Roboto', sans-serif;
    }

    &:focus {
        border: 2px solid var(--main1);
    }
`;

interface IInputTextareaProps {
    height?: number;
}

export const InputTextarea = styled.textarea<IInputTextareaProps>`
    background: var(--white0);
    border: 2px solid var(--gray3);
    border-radius: 3px;
    padding: 10px;
    color: var(--gray0);
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 10px;
    transition: all 0.2s ease;

    ${p =>
        p.height &&
        css`
            height: ${p => p.height}px;
        `}

    &::placeholder {
        color: var(--gray3);
        font-family: 'Roboto', sans-serif;
    }

    &:focus {
        border: 2px solid var(--main1);
    }

    resize: none;
`;

export const Button = styled.button`
    padding: 15px 10px;
    background: var(--main1);
    color: var(--white0);
    border: none;
    border-radius: 8px;
    font-weight: 700;
    transition: all .2s ease;
    cursor: pointer;

    &:hover {
        background: var(--main2);
    }
`;

export const Label = styled.label`
    color: var(--gray2);
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 6px;
`;

export const Form = styled(Unform)`
    display: flex;
    flex-direction: column;
`;
