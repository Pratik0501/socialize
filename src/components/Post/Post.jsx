import React from 'react'
import './Post.css'
import Comment from '../../img/img/comment.png'
import Heart from '../../img/img/like.png'
import Share from '../../img/img/share.png'
import NotLike from '../../img/img/notlike.png'

const Post = ({data}) => {
  return (
    <div className='Post'>
        <img src={data.img}/>
        <div className='postReact'>
            <img src= {data.liked?Heart: NotLike}/>
            <img src= {Comment}/>
            <img src={Share}/>
        </div>
        <span style={{color: "var(--gray)"}}>{data.likes} likes</span>
        <div className='detail'>
            <span><b>{data.name}</b></span>
            <span>  {data.desc}</span>
        </div>
    </div>
  )
}

export default Post