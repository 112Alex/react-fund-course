import React, { useRef, useState } from 'react'
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

  const [post, setPost] = useState({title: '', body: ''})

  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: '', body: ''})
  }

  return (
    <div className='App'>
      <form>
        {/*УПРАВЛЯЕМЫЙ КОМПОНЕНТ*/}
        <MyInput
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text"
          placeholder='Название поста'
        />
        {/*НЕУПРАВЛЯЕМЫ\НЕКОНТРОЛИРУЕМЫЙ КОМПОНЕНТ*/}
        <MyInput
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type="text"
          placeholder='Описание поста'
        />
        <MyButton onClick={addNewPost} >создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов 1"/>
    </div>
  )
}

export default App
