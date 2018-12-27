import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { Navigation } from '@components'
import { GlobalStyles, media, theme } from '@styles'

// Injecting global styles and reset

const WebContainer = styled.div`
  background: linear-gradient(240.5deg, #111216 0%, #000000 82.84%);
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;

  ${media.tablet`
    overflow: initial;
  `};
`

class Layout extends Component {
  render() {
    const { children } = this.props

    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <WebContainer>
            <Navigation />
            {children}
          </WebContainer>
        </>
      </ThemeProvider>
    )
  }
}

export default Layout
