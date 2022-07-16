import React from 'react'

const Venueall = () => {
  return (
    <div className='venue_wrapper'>
        <section className="lincoln_main">
        <h3 className="feature-h3">
            1069 Riverbank, Lincoln Park
        </h3>
        <div className="caro-river-sect">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="/images/river1.jpeg" className="d-block w-100 venue_image" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="/images/river2.jpeg" className="d-block w-100 venue_image" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="/images/river3.jpeg" className="d-block w-100 venue_image" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="/images/river4.jpeg" className="d-block w-100 venue_image" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="/images/river5.jpeg" className="d-block w-100 venue_image" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="/images/river6.jpeg" className="d-block w-100 venue_image" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="/images/river7.jpeg" className="d-block w-100 venue_image" alt="..."/>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
        </div>
        <div className="flexcontainer">
            <div className="flex-24">
                <div className="lincoln-map-main">
                    <div className="map-box">
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d378149.6355819924!2d-83.178863!3d42.229531!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b372772477441%3A0x41ef68ddd5b949fe!2s1069%20Riverbank%20St%2C%20Lincoln%20Park%2C%20MI%2048146!5e0!3m2!1sen!2sus!4v1647672963701!5m2!1sen!2sus" className="map-wid" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
                    </div>
                    <div className="having-box2">
                        <div className="flexcontainer">
                            <div className="flex-25">
                                <div className="icon-feature">
                                    <i className="fa-solid fa-bed"></i>
                                </div>
                                <div className="write-feature2">
                                    3 Bedrooms
                                </div>
                            </div>
                            <div className="flex-25i">
                                <div className="icon-feature">
                                    <i className="fa-solid fa-bath"></i>
                                </div>
                                <div className="write-feature2">
                                    1.5 Bathrooms
                                </div>
                            </div>
                            <div className="flex-25i">
                                <div className="icon-feature">
                                    <i className="fa-solid fa-house-user"></i>
                                </div>
                                <div className="write-feature2">
                                    1400 sqft
                                </div>
                            </div>
                            <div className="flex-25i">
                                <div className="icon-feature">
                                    <i className="fa-solid fa-car"></i>
                                </div>
                                <div className="write-feature2">
                                    1 Car Garage
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contain-box">
                        <div className="flexcontainer">
                            <div className="flex-26">
                                <div className="purchase2">
                                    Purchase Price:
                                </div>
                                <div className="price-numb2">
                                    $110,000
                                </div>
                            </div>
                            <div className="flex-26i">
                                <div className="purchase2">
                                    ROI (Cash on Cash)
                                </div>
                                <div className="price-numb2">
                                    9.82%
                                </div>
                            </div>
                        </div>
                        <div className="flexcontainer">
                            <div className="flex-26">
                                <div className="purchase2">
                                    Gross Monthly Income:
                                </div>
                                <div className="price-numb2">
                                    $1,250
                                </div>
                            </div>
                            <div className="flex-26i">
                                <div className="purchase2">
                                   Gross Yearly Income:
                                </div>
                                <div className="price-numb2">
                                    $15,000
                                </div>
                            </div>
                        </div>
                        <div className="flexcontainer">
                            <div className="flex-26">
                                <div className="project-rent2">
                                    Monthly Taxes:
                                </div>
                                <div className="project-numb2">
                                    $175
                                </div>
                            </div>
                            <div className="flex-26i">
                                <div className="project-rent2">
                                    Yearly Taxes:
                                </div>
                                <div className="project-numb2">
                                    $2,100
                                </div>
                            </div>
                        </div>
                        <div className="flexcontainer">
                            <div className="flex-26">
                                <div className="project-rent2">
                                    Monthly Insurance:
                                </div>
                                <div className="project-numb2">
                                    $50
                                </div>
                            </div>
                            <div className="flex-26i">
                                <div className="project-rent2">
                                    Yearly Insurance:
                                </div>
                                <div className="project-numb2">
                                    $600
                                </div>
                            </div>
                        </div>
                        <div className="flexcontainer">
                            <div className="flex-26">
                                <div className="project-rent2">
                                    Monthly Management Fee:
                                </div>
                                <div className="project-numb2">
                                    $125
                                </div>
                            </div>
                            <div className="flex-26i">
                                <div className="project-rent2">
                                    Yearly Management Fee:
                                </div>
                                <div className="project-numb2">
                                    $1,500
                                </div>
                            </div>
                        </div>
                        <div className="flexcontainer">
                            <div className="flex-26">
                                <div className="project-rent2">
                                    Total Monthly Expenses:
                                </div>
                                <div className="project-numb2">
                                    $350
                                </div>
                            </div>
                            <div className="flex-26i">
                                <div className="project-rent2">
                                    Total yearly Expenses:
                                </div>
                                <div className="project-numb2">
                                    $4,200
                                </div>
                            </div>
                        </div>
                        <div className="flexcontainer">
                            <div className="flex-26">
                                <div className="purchase2">
                                    Total Monthly Net Income:
                                </div>
                                <div className="price-numb2">
                                    $900
                                </div>
                            </div>
                            <div className="flex-26i">
                                <div className="purchase2">
                                    Total Yearly Net Income:
                                </div>
                                <div className="price-numb2">
                                    $10,800
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-24i">
                <div className="lincoln-col-main">
                    <form action="" className="form-lin">
                        <div className="inp-lin-box">
                            <label for="salepri"><b>Sale Price</b></label><br/>
                            <input id="salepri" type="number" value="10000"/>
                        </div>
                        <div className="inp-lin-box">
                            <label for="perdwn"><b>Percent Down</b></label><br/>
                            <input id="perdwn" type="number" value="10000"/>
                        </div>
                        <div className="inp-lin-box">
                            <label for="termy"><b>Term (Years)</b></label><br/>
                            <input id="termy" type="number" value="10000"/>
                        </div>
                        <div className="inp-lin-box">
                            <label for="interest"><b>Interest Rate in %</b></label><br/>
                            <input id="interest" type="number" value="10000"/>
                        </div>
                        <button type="submit" className="submit-btn-lin">
                            Calculate
                        </button>
                    </form>
                    <div className="al-says-box">
                        <img src="/images/logo2.png" alt="" className="strate-img-lin"/>
                        <img src="/images/Al.jpg" alt="" className="al-img-lin"/>
                        <h4 className="al-ba">
                            AL BAZZY
                        </h4>
                        <p className="lin-p">
                            Al currently serves as the Property Specialist bringing years of experience in customer relations to the Team. Al has experience evaluating and marketing a variety of property types.
                        </p>
                        <div className="call-btn">
                            <a href="" className="call-anc">
                                <div className="call-wr">
                                    CALL NOW
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flexcontainer sec-row">
            <div className="flex-24 mar-top-buy">

                <div className="buying-process">
                    <h3 className="buy-h2-lin">
                        BUYING PROCESS
                    </h3>
                    <ul className="lin-ul">
                        <li>
                            The home will have one or more of these items – comprehensive inspection, title search, rent history if leased, and more – all of which are available in the Diligence Documents.
                        </li>
                        <li>
                            An inspection contingent sale is available on non-certified homes and if the posted inspection is more than 4 months old.
                        </li>
                        <li>
                            A Strategy Property employee will be the sole representative who will walk you through the process​.
                        </li>
                    </ul>
                    <p className="lin-p">
                        <i>
                            (Important Note: Please note that figures and percentages quoted within this document are approximate. Property taxes quoted are based on publicly available information at the time of our publication. Final figures will be verified and supplied by the title company. Although Strategy Properties takes all appropriate steps to ensure accuracy of the figures supplied, we cannot accept responsibility for any discrepancies therein)
                        </i>
                    </p>
                </div>
            </div>
            <div className="flex-24i">

                <div className="lincoln-col-main2">
                    <h3 className="buy-h2-lin">
                        NEED REPAIRS?
                    </h3>
                    <p className="lin-p">
                        GetPro Services operate as synergetic companies to provide clients with a one-stop-shop for small to large interior & exterior renovations, interior & exterior painting, floor coatings, and maintenance/handyman repairs
                    </p>
                    <div className="call-btn">
                        <a href="" className="call-anc">
                            <div className="call-wr">
                                CLICK HERE
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Venueall