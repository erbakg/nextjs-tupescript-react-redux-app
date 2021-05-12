import React, { FC } from 'react'
import { AppProps } from 'next/app'
import { wrapper } from '../store'
import NextNProgress from 'nextjs-progressbar'
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    padding:0; 
    margin:0;
    background-color:rgba(0,0,0,0.12)
  }
`

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) =>(
  <>
  <GlobalStyle />
  <NextNProgress
  color="#29D"
  startPosition={0.3}
  stopDelayMs={200}
  height={3}
/>
  <Component {...pageProps} />
  </>
)

export default wrapper.withRedux(WrappedApp)
