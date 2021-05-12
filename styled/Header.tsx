import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
background-color:darkblue;
height:4rem;
width:100%;
display:flex;
align-items:center;
justify-content:center
`

export default function Header({children}) {
  return (
    <StyledHeader>
      {children}
    </StyledHeader>
  )
}
