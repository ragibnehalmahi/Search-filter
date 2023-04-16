import React from 'react'

const Post = ({post}) => {
  return (
   <article>
    <h2>{post.title}</h2>
    <p>Post Id:{post.id}</p>
   </article>
  )
}

export default Post