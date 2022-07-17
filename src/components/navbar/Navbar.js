import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar_wrapper'>
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <img src='/images/logo2.png'/>
                </div>
                <div className='col-6 d-flex align-items-center justify-content-end'>
                    <div className='login-btn'>
                        Login
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar