import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    background-color: ${props => props.theme.secondary
      ? 'var(--default-primary-brown)'
      : 'var(--default-primary-beige)'
    };
    color: ${props => props.theme.secondary
      ? 'var(--default-primary-beige)'
      : 'var(--default-primary-brown)'
    };
    height: ${props => props.theme.full
      ? '100%'
      : '100vh'
    };
    width: 100%;
    padding: 2rem 1.5rem;
    box-sizing: border-box;

    @media (min-width: 640px) {
        display: flex;
        height: 100vh;
        padding: ${props => props.theme.full
          ? '4rem 3rem 0'
          : '4rem 3rem'
        };
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.theme.center
      ? 'center'
      : 'flex-start'
    };
    height: 100%;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
`;

const Layout = ({ theme, children }) => (
    <Container theme={theme}>
        <Content theme={theme}>
            { children }
        </Content>
    </Container>
);

export default Layout;
