import React from 'react'
import styled from 'styled-components'
const StyledLink = styled.a`
  color: white;
  font-size: 20;
  padding: 2rem;
  font-family: Roboto;
`

export default function LinkA({ children }) {
  return <StyledLink>{children}</StyledLink>
}
