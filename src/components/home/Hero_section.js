import React from 'react'
import Navbar from '../navbar/Navbar'

const Hero_section = () => {
  return (
    <div className='hero_box_wrapper'>
        <div className='hero_box'>
            <Navbar/>
            <div className='hero-d-flex-box'>
            <h1 className='hero-sect-heading'>Find Venue For Your Valuable Occasions</h1>
            <div className='main-hero-box'>
                <form className='form-search'>
                    <div className='input_boxes'>
                        <select name="cars" id="cars" className='location_select'>
                            <option value="volvo">Location</option>
                            <option value="">Gulistan e Johar</option>
                            <option value="">Sakhi Hasan</option>
                            <option value="">Gulbery</option>
                            <option value="">Surjani</option>
                            <option value="">Five Star Chowrangi</option>
                            <option value="">Karsaz</option>
                            <option value="">Airport</option>
                        </select>
                    </div>
                    <div className='input_boxes'>
                        <select name="cars" id="cars" className='location_select'>
                            <option value="volvo">Type</option>
                            <option value="">Venue</option>
                            <option value="">Banquet</option>
                            <option value="">Hall</option>
                            <option value="">Marquees</option>
                            <option value="">Auditorium</option>
                        </select>
                    </div>
                    <button type='submit' className='searchbtn'>Search</button>
                </form>
            </div>
            <div className='hero-last-box'>
                <div className='hero-last-p'>
                    Don't want the hassle?
                </div>
                <h4 className='hero-last-h5'>
                    Let us handle everything for you!
                </h4>
                <div className='call-btn-box'>
                    <a href='' className='call-anc'>
                        <div className='call-wr'>
                        CALL US
                        </div>
                    </a>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero_section