import React from 'react'
import './RightSide.css'
import Home from '../../img/img/home.png'
import Noti from '../../img/img/noti.png'
import Comment from '../../img/img/comment.png'
import {UilSetting} from '@iconscout/react-unicons'
import TrendCart from '../TrendCart/TrendCart'


const RightSide = () => {
  return (
    <div className='RightSide'>
        <div className='navIcons'>
            <img src={Home}/>
            <UilSetting/>
            <img src={Noti}/>
            <img src={Comment}/>
        </div>

        <TrendCart/>
        <button className='button r-button'>Share</button>
    </div>
  )
}

export default RightSide