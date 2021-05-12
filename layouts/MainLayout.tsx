import React from 'react'
import Header from '../styled/Header'
import Title from '../styled/Title'
import Link from 'next/link'
import LinkA from '../styled/LinkA'
import LinkDiv from '../styled/LinkDiv'
import styled from 'styled-components'
import Head from 'next/head'


interface MainLayoutProps {
  title?:string; 
  description?:string;
  keywords?:string
}
const MainDiv = styled.div`
cursor:default
`

const StyledDiv = styled.div`
cursor:default;
margin:0;
padding:0;
width:100%
`
const MainLayout: React.FC<MainLayoutProps> = ({ children, title, description, keywords}) => {
  return (
    <StyledDiv>
    <Head>
    <title>{title || 'Posts Page'}</title>
    <meta name="description" content={'App for writing and reading posts about everything!'+description} />
    <meta name="keywords" content={keywords || "post, posts, writing posts, add posts, social"} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
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
export default MainLayout