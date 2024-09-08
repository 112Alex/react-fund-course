import React, { useState } from 'react'
import ReactDOM from 'react'
import Counter from './components/Counter'
import './styles/App.css'
import Postitem from './components/Postitem'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/button/input/MyInput'

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'description'},
    {id: 2, title: 'Javascript 2', body: 'description'},
    {id: 3, title: 'Javascript 3', body: 'description'},
  ]);

  return (
    <div className='App'>
      <form>
        <MyInput type="text" placeholder='Название поста'/>
        <MyInput type="text" placeholder='Описание поста'/>
        <MyButton disabled >создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов 1"/>
    </div>
  )
}

export default App
