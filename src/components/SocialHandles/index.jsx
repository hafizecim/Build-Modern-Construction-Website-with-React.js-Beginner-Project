import React from 'react'
import "./SocialHandles.css"
import { socialHandles } from '../../data'

const SocialHandles = () => {
  return (
    <div className='flex social_handles'>
        {socialHandles.map((handle, index) => (
            <a href={handle.link} className='flex__center icon' target="_blank" rel="noreferrer noopener"  key={index}>
                {handle.icon}
            </a>
        ))}
    </div>
  )
}

export default SocialHandles