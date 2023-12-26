import React from 'react';
import styled from 'styled-components';
import { LIGHT_THEME } from '../constants/theme';

const Container = styled.div`
    display: flex;
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.fg};
    height: 100vh;
    width: 100%;
    padding: 2rem 1.5rem;
    box-sizing: border-box;

    @media (min-width: 640px) {
        display: flex;
    }
`;

const Content = styled.div`
    align-self: center;
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

const Layout = ({ theme = LIGHT_THEME, children }) => (
    <Container theme={theme}>
        <Content>
            { children }
        </Content>
    </Container>
);

export default Layout;
