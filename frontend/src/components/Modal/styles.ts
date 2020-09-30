import styled, { css } from 'styled-components';

interface IContainerProps {
    visible: boolean;
}

export const Container = styled.div<IContainerProps>`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    transition: all .2s ease;

    ${p =>
        p.visible
            ? css`
                  display: block;
              `
            : css`
                  display: none;
              `}
`;
