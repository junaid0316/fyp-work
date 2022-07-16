import React from 'react'

const Venuefilter = () => {
  return (
    <div className='filter_wrapper'>
        <div class="tabs-prop">
              <div class="tabs-boxes">
                <select name="types" id="cars" class="select-box-prop">
                    <option class="range-opt" value="volvo">Types</option>
                  </select>
              </div>
              <div class="tabs-boxes">
                <select name="categories" id="cars" class="select-box-prop">
                    <option class="range-opt" value="categories">Categories</option>
                    <option class="range-opt" value="multi">Multi Family</option>
                    <option class="range-opt" value="Reliable">Reliable Rentals</option>
                    <option class="range-opt" value="Single">Single Family Home</option>
                    <option class="range-opt" value="turnkey">Turnkey SFH</option>
                </select>
              </div>
              <div class="tabs-boxes">
                <select name="cities" id="cars" class="select-box-prop">
                    <option class="range-opt" value="cities">Cities</option>
                    <option class="range-opt" value="Ann Arbor">Ann Arbor</option>
                    <option class="range-opt" value="Detroit">Detroit</option>
                    <option class="range-opt" value="Eastpointe">Eastpointe</option>
                    <option class="range-opt" value="Harper">Harper Woods</option>
                    <option class="range-opt" value="Inkster">Inkster</option>
                    <option class="range-opt" value="Lincoln Park">Lincoln Park</option>
                        <option class="range-opt" value="Oak Park">Oak Park</option>
                        <option class="range-opt" value="Redford">Redford</option>
                        <option class="range-opt" value="Roseville">Roseville</option>
                        <option class="range-opt" value="Southfield">Southfield</option>
                            <option class="range-opt" value="Warren">Warren</option>
                            <option class="range-opt" value="Wayne">Wayne</option>
                                <option class="range-opt" value="Westland">Westland</option>
                  </select>
              </div>
              <div class="tabs-boxes">
                <select name="areas" id="cars" class="select-box-prop">
                    <option class="range-opt" value="areas">Areas</option>
                </select>
              </div>
              <div class="tabs-boxes">
                <select name="Newest" id="cars" class="select-box-prop">
                    <option class="range-opt" value="pricehtl">Price High to Low</option>
                    <option class="range-opt" value="pricelth">Price Low to High</option>
                    <option class="range-opt" value="newestfirst">Newest first</option>
                    <option class="range-opt" value="oldestfirst">Oldest first</option>
                    <option class="range-opt" value="bedhtl">Bedrooms High to Low</option>
                    <option class="range-opt" value="bedlth">Bedrooms Low to High</option>
                    <option class="range-opt" value="bathhtl">Bathrooms High to Low</option>
                    <option class="range-opt" value="bathlth">Bathrooms Low to High</option>
                    <option class="range-opt" value="default">Default</option>
                </select>
              </div>
              <div class="list-icon">
                <i class="fa-solid fa-table-cells"></i>
              </div>
          </div>
    </div>
  )
}

export default Venuefilter