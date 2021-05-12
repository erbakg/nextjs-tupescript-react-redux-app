import React from 'react'
import Header from '../styled/Header'
import Title from '../styled/Title'
import Link from 'next/link'
import LinkA from '../styled/LinkA'
import LinkDiv from '../styled/LinkDiv'
import styled from 'styled-components'

const MainDiv = styled.div`
cursor:default`

const StyledDiv = styled.div`
cursor:default;
margin:0;
padding:0;
width:100%
`
export default function MainLayout({ children }) {
  return (
    <StyledDiv>
    <Header>
        <LinkDiv>
          <Link href={'/'}>
            <a style={{ textDecoration: 'none' }}>
              <LinkA>Posts</LinkA>
            </a>
          </Link>
          <Link href={'/posts/new'}>
            <a style={{ textDecoration: 'none' }}>
              <LinkA>Add post</LinkA>
            </a>
          </Link>
        </LinkDiv>
      </Header>
      <MainDiv>{children}</MainDiv>
    </StyledDiv>
  )
}
