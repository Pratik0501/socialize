import React from 'react'
import './TrendCart.css'
import { TrendData } from '../../Data/TrendData'

const TrendCart = () => {
  return (
    <div className='TrendCart'>
        <h3>Top Trends for You</h3>
        {TrendData.map((trend)=>{
            return(
                <div className='trend'>
                    <span>#{trend.name}</span>
                    <span>{trend.shares}k shares</span>
                </div>
            )
        })}
    </div>
  )
}

export default TrendCart