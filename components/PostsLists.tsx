import React from 'react'
import { IPost } from '../types/posts'
import styled from 'styled-components'
import PostItem from './PostItem'

interface PostListProps {
  posts: IPost[]
}

const PostsListDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const PostItemDiv = styled.div`
  width: 100%;
`
const PostsLists: React.FC<PostListProps> = ({ posts }) => {
  return (
    <PostsListDiv>
      <PostItemDiv>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </PostItemDiv>
    </PostsListDiv>
  )
}
export default PostsLists
