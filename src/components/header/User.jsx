import React, { useState } from "react"
import { IoSettingsOutline } from "react-icons/io5"
import { BiLogOut } from "react-icons/bi"
import { RiImageAddLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import "./user.css";

export const User = () => {
  const user = true
  const [profileOpen, setProfileOpen] = useState(false)
  const close = () => {
    setProfileOpen(false)
  }
  return (
    <>
      <div className='profile'>
        {user ? (
          <>
            <button className='img' onClick={() => setProfileOpen(!profileOpen)}>
              <img src='https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
            </button>
            {profileOpen && (
              <div className='openProfile boxItems' onClick={close}>
                <Link to='/account'>
                  <div className='image'>
                    <div className='img'>
                      <img src='https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
                    </div>
                    <div className='text'>
                      <h4>Monisha</h4>
                      {/* <label>Los Angeles, CA</label> */}
                    </div>
                  </div>
                </Link>
                <Link to='/create'>
                  <button className='box'>
                    <RiImageAddLine className='icon' />
                    <h4>Create Post</h4>
                  </button>
                </Link>
                <Link to='/login'>
                  <button className='box'>
                    <IoSettingsOutline className='icon' />
                    <h4>My Account</h4>
                  </button>
                </Link>
                <button className='box'>
                  <BiLogOut className='icon' />
                  <h4>Log Out</h4>
                </button>
              </div>
            )}
          </>
        ) : (
          <button>My Account</button>
        )}
      </div>
    </>
  )
}
