import React from 'react';
import styled from 'styled-components';
import { DEFAULT_THEME } from '../constants/theme';

const Container = styled.div`
    display: ${props => props.theme.display};
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.fg};
    min-height: 100vh;
    padding: 2rem 1.5rem;
    box-sizing: border-box;

    @media (min-width: 640px) {
        display: flex;
    }
`;

const Content = styled.div`
    align-self: ${props => props.theme.align};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;

    @media (min-width: 640px) {
        align-self: center;
    }
`;

const Layout = ({ themeOverride, children }) => {
    const theme = { ...DEFAULT_THEME, ...themeOverride };

    return (
        <Container theme={theme}>
            <Content theme={theme}>
                { children }
            </Content>
        </Container>
    )
};

export default Layout;