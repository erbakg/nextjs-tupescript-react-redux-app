import axios from 'axios'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import React, { useState } from 'react'
import { IPost } from '../../types/posts'
import MainLayout from '../MainLayout'
import styled from 'styled-components'

const Post = ({ serverPosts }) => {
  const [post, setPost] = useState<IPost>(serverPosts)
  const router = useRouter()

  const Title = styled.h3`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.5rem;
    text-align: center;
  `
  const BodyText = styled.h5`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    padding: 0 2rem;
  `
  return (
    <MainLayout>
      <Title>Title: {post.title}</Title>
      <BodyText>Message: {post.body}</BodyText>
    </MainLayout>
  )
}
export default Post
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const response = await axios.get(
    'https://simple-blog-api.crew.red/posts/' + query.id
  )
  return {
    props: {
      serverPosts: response.data,
    },
  }
}
