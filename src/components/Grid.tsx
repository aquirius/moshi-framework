import React, {ReactElement, ReactNode} from 'react';
import styled from 'styled-components';

interface GridProps {
    dimension: string;
    layout: string;
    rows?: string;
    children: ReactNode;
}

const StyledGrid = styled.div<{dimension : string, layout : string, rows?: string}>`
    display:grid;
    grid-gap: 1rem;
    height: 100vh;
    grid-template-columns: ${(props) => props.layout};
    grid-template-areas: ${(props) => props.dimension};
    ${(props) => props.rows ? "grid-template-rows:"+props.rows : ""};
    align-items:start;
    background: transparent;
`;



const Grid = ({dimension, layout, children, rows } : GridProps) : ReactElement => {
    return (
        <>
        <StyledGrid rows={rows} layout={layout} dimension={dimension}>{children}</StyledGrid>
        </>
    );
}

const StyledGridElement = styled.div<{position : string, align?: string, row?: string}>`
    grid-area: ${(props) => props.position};
    grid-row-start: auto;
    grid-row-end: auto;
    align-self: ${(props) => props.align ? props.align : "start"};
    ${(props) => props.row ? "grid-row:"+props.row  : ""};
    height: 100%; 
    float:left;

`;


interface GridElementProps {
    position: string;
    align?: string;
    children: ReactNode;
    row?: string;
}

const GridElement = ({position,children } : GridElementProps) : ReactElement => {
    return (
        <StyledGridElement position={position}>{children}</StyledGridElement>
    );
}

export {Grid, GridElement}