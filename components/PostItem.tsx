import React from 'react'
import { IPost } from '../types/posts'
import styled from 'styled-components'
import Link from 'next/link'

interface TrackItemProps {
  post: IPost
}

const StyledPostDiv = styled.div`
  height: 50;
  border: 1px solid #000;
  margin-top: 2%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  background-color:#fff
`
const StyledTitle = styled.h1`
  font-size: 2rem;
  padding-right: 1%;
  font-family: Roboto;
`

const PostItem: React.FC<TrackItemProps> = ({ post }) => {
  return (
    <Link href={'/posts/[id].js'} as={`/posts/${post.id}`}>
      <StyledPostDiv>
        <StyledTitle>
          {post.id}. {post.title}
        </StyledTitle>
      </StyledPostDiv>
    </Link>
  )
}
export default PostItem
