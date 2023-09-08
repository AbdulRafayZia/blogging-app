import React from 'react'
import './Post.css'
export default function Post() {
  return (
    <div className='post'>
      <img className='postImg' src="https://images.pexels.com/photos/16117986/pexels-photo-16117986.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
    <div className="postInfo">
        <div className="postCats">
            <span className='postCat'>Music</span>
            <span className='postCat'>Life</span>
        </div>
    <span className="postTitle">Lorem ipsum, dolor sit amet consectetu.</span>
    <hr />
    <span className="postDate">1 hour later</span>
    </div>
    <p className='postDecs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Corporis nulla accusamus velit, repellendus adipisci ut reprehenderit cupiditate minima fuga esse unde cum
      omnis laborum. Minus recusandae quia commodi facere error!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. In, consectetur nemo. 
      Asperiores a eveniet labore omnis fuga molestiae ad, vitae dolore sit sequi, adi
      pisci eos dolor unde ea, neque quas.</p>
    </div>
  )
}
