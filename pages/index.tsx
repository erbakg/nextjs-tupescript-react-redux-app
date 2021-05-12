import React from 'react'
import PostsLists from '../components/PostsLists'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { NextThunkDispatch, wrapper } from '../store'
import { FetchPosts } from '../store/action-creators/posts'
import { IPost } from '../types/posts'
import MainLayout from '../layouts/MainLayout'
interface PostsListProps {
  posts:IPost[]
}
const Home:React.FC<PostsListProps> =()=> {
 const {posts, error}=useTypedSelector(state=>state.posts)

 if (error){
   return <MainLayout>
     <h1>{error}</h1>
   </MainLayout>
 }
  
  return (
    <MainLayout>
      <PostsLists posts={posts} />
    </MainLayout>
  )
}
export default Home

export const getServerSideProps = wrapper.getServerSideProps(async ({store})=>{
  const dispatch = store.dispatch as NextThunkDispatch 
   await dispatch(await FetchPosts())
})