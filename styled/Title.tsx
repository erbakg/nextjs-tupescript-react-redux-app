import React, { Children } from 'react'
import styled  from 'styled-components'

const StyledTitle = styled.p`
font-size:20;
padding:2rem;
`

export default function Title({children}) {
  return (
    <StyledTitle>
      {children}
    </StyledTitle>
  )
}
