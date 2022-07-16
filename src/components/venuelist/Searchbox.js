import React from 'react'

const Searchbox = () => {
  return (
        <div className='searchbox_wrapper'>
            <div class="range_select_box">
              <form action="" method="POST">
                  <div class="flexcontainer-range">
                    <div class="inputs-range">
                        <select name="cars" id="cars" class="select-box-prop">
                            <option class="range-opt" value="volvo">Volvo</option>
                            <option class="range-opt" value="saab">Saab</option>
                            <option class="range-opt" value="mercedes">Mercedes</option>
                            <option class="range-opt" value="audi">Audi</option>
                          </select>
                      </div>
                      <div class="inputs-range">
                        <select name="cars" id="cars" class="select-box-prop">
                            <option class="range-opt" value="volvo">Volvo</option>
                            <option class="range-opt" value="saab">Saab</option>
                            <option class="range-opt" value="mercedes">Mercedes</option>
                            <option class="range-opt" value="audi">Audi</option>
                          </select>
                      </div>
                      <div class="inputs-range">
                        <select name="cars" id="cars" class="select-box-prop">
                            <option class="range-opt" value="volvo">Volvo</option>
                            <option class="range-opt" value="saab">Saab</option>
                            <option class="range-opt" value="mercedes">Mercedes</option>
                            <option class="range-opt" value="audi">Audi</option>
                          </select>
                      </div>
                      <div class="inputs-range">
                        <select name="cars" id="cars" class="select-box-prop">
                            <option class="range-opt" value="volvo">Volvo</option>
                            <option class="range-opt" value="saab">Saab</option>
                            <option class="range-opt" value="mercedes">Mercedes</option>
                            <option class="range-opt" value="audi">Audi</option>
                          </select>
                      </div>
                  </div>
                  <br/>
                  <div class="flexcontainer-range">
                    <div class="inputs-range2">
                        <div class="price-range-wr">
                            Price range: <span class="clr-range">$ 25,000 to $ 150,000</span>
                        </div>
                      <div class="min-max-range">
                          <input type="range" min="0" max="25000" value="2000" class="range" id="min"/>
                          <input type="range" min="25001" max="150000" value="8000" class="range" id="max"/>      
                      </div> 
                    </div>
                    <div class="inputs-range">
                      <input type="text" placeholder="Keywords" class="inp-range" name="" id=""/>
                    </div>
                    <div class="inputs-range">
                        <button type="submit">Search</button>
                    </div>
                </div>


              </form>
          </div>
        </div>
  )
}

export default Searchbox