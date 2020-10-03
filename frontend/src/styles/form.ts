import styled from 'styled-components';
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
    
    &::placeholder {
        color: var(--gray3);
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
