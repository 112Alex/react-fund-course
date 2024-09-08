import React, { useRef, useState } from 'react'
import ReactDOM from 'react'
import Counter from './components/Counter'
import './styles/App.css'
import Postitem from './components/Postitem'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/button/input/MyInput'
import PostForm from './components/PostForm'
import MySelect from './components/UI/select/MySelect'

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'description'},
    {id: 2, title: 'Javascript 2', body: 'description'},
    {id: 3, title: 'Javascript 3', body: 'description'},
  ]);
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  // получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className='App'>
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MySelect
          defaultValue="сортировка по"
          options={[]}
        />
      </div>
      {posts.length
        ?
        <PostList remove={removePost} posts={posts} title="Посты про JS"/>
        :
        <h1 style={{textAlign: 'center'}}>
          Посты не были найдены
        </h1>
      }
    </div>
  )
}

export default App
