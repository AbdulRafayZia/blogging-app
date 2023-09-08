import React from 'react'
import "./Setting.css"
import Sidebar from '../../components/sidebar/Sidebar'
export default function Setting() {
  return (
    <div className='setting'>
     <div className="settingWrapper">
      <div className="settingTitle">
        <span className="settingUpdateTitle">Update Your Account</span>
        <span className="settingDeleteTitle">Delete Account</span>
      </div>
      <form  className="settingForm">
        <label htmlFor="">Profile Picture</label>
        <div className="settingPP">
            <img src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
            <label htmlFor='fileInput'>
            <i className="settingPPIcon fa-regular fa-circle-user"></i>
          </label>
        <input type='file' id='fileInput' style={{display:"none"}} />

        </div>
        <label>UserName</label>
        <input type='text' placeholder='safak'/>
        <label>email</label>
        <input type='email' placeholder='safak@gmail.com'/>
        <label>Password</label>
        <input type='password' />
        <button className="settingSubmit">Update</button>
      </form>
       
     </div>
     <Sidebar/>
    </div>
  )
}
