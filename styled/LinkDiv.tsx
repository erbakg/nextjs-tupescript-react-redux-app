import React from 'react'
import styled from 'styled-components'
const StyledLinkDiv= styled.div`
`

export default function LinkDiv({children}) {
  return (
    <StyledLinkDiv>
      {children}
    </StyledLinkDiv>
  )
}
