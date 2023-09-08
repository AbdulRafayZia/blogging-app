import React from 'react'
import "./Write.css"
export default function Write() {
  return (
    <div className='write'>
        <img src="https://images.pexels.com/photos/16021955/pexels-photo-16021955.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="writeImg" />
      <form className='writeForm'>
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="writeFormIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id='fileInput' style={{display:"none"}}/>
            <input type="text"  placeholder='Title' className='writeInput' autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
            <textarea placeholder='Tell your story'  type="text" className='writeInput writeText'></textarea>
        </div>
        <button className='writeSubmit'>Publish</button>
      </form>
    </div>
  )
}
