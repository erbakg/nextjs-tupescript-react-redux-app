import React from 'react'
import { useInput } from '../../hooks/useInput'
import MainLayout from '../MainLayout'
import styled from 'styled-components'
import axios from 'axios'
import { useRouter } from 'next/dist/client/router'

const PageTitle = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
`
const InputBox = styled.div`
  width: 100%;
  margin-top: 1rem;
`
const Input = styled.input`
  height: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.13);
  width: 60%;
  display: block;
  margin: 0 auto;
  padding: 0.5rem;
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const BodyInput = styled.textarea`
  height: 10rem;
  border: 1px solid rgba(0, 0, 0, 0.13);
  width: 60%;
  display: block;
  margin: 0 auto;
  padding: 0.5rem;
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const AddButton = styled.button`
  width: 20%;
  height: 2rem;
  display:block;
  margin:2rem auto;
  background-color:blue;
  border: 1px solid rgba(0, 0, 0, 0.13);
  border-radius:1rem;
  color:#fff;
  font-size:1rem
`
export default function New() {

  const title = useInput('')
  const body = useInput('')

  const router = useRouter()

  const addPost =()=>{
   axios({
     method:'POST',
     url:'https://simple-blog-api.crew.red/posts',
     headers:'',
     data:{
       title:title.value,
       body:body.value
     }
   })
   .then((resp)=>router.push('/'))
  }
  return (
    <MainLayout>
      <PageTitle>Lets create a new Post</PageTitle>
      <InputBox>
        <Input {...title} placeholder="Write post title" />
      </InputBox>
      <InputBox>
        <BodyInput {...body} placeholder="Write post body" />
      </InputBox>
      <AddButton onClick={addPost}>Add</AddButton>
    </MainLayout>
  )
}
