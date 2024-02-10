import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPosts } from './postsSlice';

function Form() {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPosts({ title, content }))
    setTitle('')
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Заголовок" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Содержание" />
      <button type="submit">Create Posts</button>
    </form>
  )
}

export default Form;