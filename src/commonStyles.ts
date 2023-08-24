import styled, { css } from 'styled-components';

// Define the prop types for the GridContainer

interface GridContainerProps {
    numCols?: number;
    numRows?: number;
    gapSize?: number;
    fullHeight?: boolean;
}

// Define the prop types for the FlexContainer
interface FlexContainerProps {
    gap?: number;
    fullHeight?: boolean;
    flexDirection?: 'row' | 'column';
    justifyContent?: string;
}

//   ------------------------------ DISPLAY ---------------------------------------

const GridContainer = styled.div<GridContainerProps>`
    display: grid;
    grid-template-columns: ${({ numCols }) =>
        numCols ? `repeat(${numCols}, 1fr)` : 'auto'};
    grid-template-rows: ${({ numRows }) =>
        numRows ? `repeat(${numRows}, 1fr)` : 'auto'};
    gap: ${({ gapSize }) => (gapSize ? `${gapSize}px` : '0')};
    ${({ fullHeight }) => (fullHeight ? 'height: 100%;' : '')}
`;
const FlexContainer = styled.div<FlexContainerProps>`
    display: flex;
    flex-wrap: wrap;
    ${({ gap }) => gap && `gap: ${gap}px`};
    ${({ fullHeight }) => fullHeight && 'height: 100%;'};
    flex-direction: ${({ flexDirection }) =>
        flexDirection ? flexDirection : 'row'};
    ${({ justifyContent }) =>
        justifyContent && `justify-content: ${justifyContent}`};
`;

const FontSize = css<{ fontSize?: 'header1' | 'header2' | 'header' | 'body' }>`
    ${({ fontSize }) =>
        fontSize &&
        `
    font-size: var(--${fontSize}-size);
    line-height: var(--${fontSize}-lh);
  `}
`;
export { FlexContainer, GridContainer, FontSize };
