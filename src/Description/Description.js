import React, { useState,useCallback } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import flag from '../images/flag.png'
import './Description.css'

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const Description = () => {
    const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
    const photos = [
        { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3 }
      ];

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
          MUI
        </Link>,
        <Link
          underline="hover"
          key="2"
          color="inherit"
          href="/material-ui/getting-started/installation/"
          onClick={handleClick}
        >
          Core
        </Link>,
        <Typography key="3" color="text.primary">
          Breadcrumb
        </Typography>,
      ];

  return (
      <div>
      <div className="breadcrumb-box">
          <Stack spacing={2}>
              <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                  {breadcrumbs}
              </Breadcrumbs>
          </Stack>
      </div>
      <div className='hall-main-name-box'>
          <div className='flexcontainer'>
              <div className='flex-hall-1'>
                  <div>
                      <div className='title-hall'>
                          Casablanca Banquet 
                      </div>
                      <span className='price-pkr'> PKR <b className='bold'>4Lac</b></span>
                  </div>
                  <div className='address'>
                      Location DHA Phase 5, Karachi
                  </div>
              </div>
              <div className='flex-hall-1i'>
                  <div className='call-btn'>
                      <i class="fa-solid fa-phone"></i> CALL NOW
                  </div>
                  <div className='inquire-btn'>
                      <i class="fa-solid fa-envelope"></i> INQUIRE
                  </div>
              </div>
          </div>
      </div>
        <div className="main-box-desc">
        <div className="flexcontainer">
            <div className="flex-desc-1">

            </div>
            <div className="flex-desc-1i">
                <div className="flexcontainer-wid">
                    <div className="flex-wid-desc">
                        <div className="btn-box">
                            Info & Prices
                        </div>
                    </div>
                    <div className="flex-wid-desc">
                        <div className="btn-box">
                            Facilities
                        </div>
                    </div>
                    <div className="flex-wid-desc">
                        <div className="btn-box">
                            Rules
                        </div>
                    </div>
                    <div className="flex-wid-desc">
                        <div className="btn-box">
                            Reviews
                        </div>
                    </div>
                </div>
                <div className='photos-gallery-desc'>
                <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
                </div>
            </div>
        </div>
        <div className="flexcontainer sec-row">
            <div className="flex-desc-2">
                <div className="get-desc">
                    Get the celebrity treatment with world-className service at Karachi Marriott Hotel
                </div>
                <p className="desc-p">
                    Across from Frere Hall and Park, the 5-star Karachi Marriott Hotel offers modern and luxurious rooms with a flat-screen cable TV. It features 3 dining options, spa and outdoor swimming pool.
                </p>
                <p className="desc-p">
                    The air-conditioned and fully carpeted rooms each have their own private bathroom, which include free toiletries, shower, hairdryer and slippers. An electric kettle and minibar can be found in each room.
                </p>
                <p className="desc-p">
                    Across from Frere Hall and Park, the 5-star Karachi Marriott Hotel offers modern and luxurious rooms with a flat-screen cable TV. It features 3 dining options, spa and outdoor swimming pool.
                </p>
                <p className="desc-p">
                    The air-conditioned and fully carpeted rooms each have their own private bathroom, which include free toiletries, shower, hairdryer and slippers. An electric kettle and minibar can be found in each room.
                </p>
            </div>
            <div className="flex-desc-2i">
                <div className="map-box">
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.5380010048216!2d67.02939561431967!3d24.845468351978727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33dd90ea19bf5%3A0x133db36e9fb69b49!2sKarachi%20Marriott%20Hotel!5e0!3m2!1sen!2ssc!4v1654412192914!5m2!1sen!2ssc" className="map-desc" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                </div>
            </div>
        </div>
        <div className="features-desc">
            <div className="feature-heading">
                Features
            </div>
            <div className="feature-contain">
                <div className="flexcontainer">
                    <div className="flex-feature">
                        <div className="feature-have">
                            <i className="fa-regular fa-circle-check"></i> <span className="feature-name">Bottles</span>
                        </div>
                        <div className="feature-have">
                            <i className="fa-regular fa-circle-check"></i> <span className="feature-name">Bottles</span>
                        </div>
                        <div className="feature-have">
                            <i className="fa-regular fa-circle-check"></i> <span className="feature-name">Bottles</span>
                        </div>
                        <div className="feature-have">
                            <i className="fa-regular fa-circle-check"></i> <span className="feature-name">Bottles</span>
                        </div>
                        <div className="feature-have">
                            <i className="fa-regular fa-circle-check"></i> <span className="feature-name">Bottles</span>
                        </div>
                    </div>
                    <div className="flex-feature-i">
                        <div className="feature-have">
                            <i className="fa-regular fa-circle-check"></i> <span className="feature-name">Bottles</span>
                        </div>
                        <div className="feature-have">
                            <i className="fa-regular fa-circle-check"></i> <span className="feature-name">Bottles</span>
                        </div>
                        <div className="feature-have">
                            <i className="fa-regular fa-circle-check"></i> <span className="feature-name">Bottles</span>
                        </div>
                        <div className="feature-have">
                            <i className="fa-regular fa-circle-check"></i> <span className="feature-name">Bottles</span>
                        </div>
                        <div className="feature-have">
                            <i className="fa-regular fa-circle-check"></i> <span className="feature-name">Bottles</span>
                        </div>
                    </div>
                    <div className="flex-feature-i">
                        <div className="feature-have">
                            <i className="fa-regular fa-circle-check"></i> <span className="feature-name">Bottles</span>
                        </div>
                        <div className="feature-have">
                            <i className="fa-regular fa-circle-check"></i> <span className="feature-name">Bottles</span>
                        </div>
                        <div className="feature-have">
                            <i className="fa-regular fa-circle-check"></i> <span className="feature-name">Bottles</span>
                        </div>
                        <div className="feature-have">
                            <i className="fa-regular fa-circle-check"></i> <span className="feature-name">Bottles</span>
                        </div>
                        <div className="feature-have">
                            <i className="fa-regular fa-circle-check"></i> <span className="feature-name">Bottles</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='reviews-desc'>
        <div className="get-desc">
        See what guests loved the most:
        </div>
        <OwlCarousel items={3}  
          className="owl-theme"  
          loop  
          nav  
          margin={8} >  
           <div>
               <div className='review-box'>
                   <div className='reviewer'>
                       <div className='icon-rev'>
                           A
                       </div>
                       <div className='rev-name'>
                           <div className='rev-title'>Ahmed</div>
                           <div className='rev-country'>
                               <img src={flag} className='flag'/> <span className='country-name'>United Arab</span>
                           </div>
                       </div>
                   </div>
                    <div className='rev-write'>
                        “I Would like to thank all the employees of the place, No specific name is to be mentioned here! cause they all work as a team from the janitor to the duty manager. Really Thank you Guys for making the hotel gusts feel confutable and safe. Location:...”
                    </div>
               </div>
           </div>
           <div>
               <div className='review-box'>
                   <div className='reviewer'>
                       <div className='icon-rev'>
                           A
                       </div>
                       <div className='rev-name'>
                           <div className='rev-title'>Ahmed</div>
                           <div className='rev-country'>
                               <img src={flag} className='flag'/> <span className='country-name'>United Arab</span>
                           </div>
                       </div>
                   </div>
                    <div className='rev-write'>
                        “I Would like to thank all the employees of the place, No specific name is to be mentioned here! cause they all work as a team from the janitor to the duty manager. Really Thank you Guys for making the hotel gusts feel confutable and safe. Location:...”
                    </div>
               </div>
           </div>
           <div>
               <div className='review-box'>
                   <div className='reviewer'>
                       <div className='icon-rev'>
                           A
                       </div>
                       <div className='rev-name'>
                           <div className='rev-title'>Ahmed</div>
                           <div className='rev-country'>
                               <img src={flag} className='flag'/> <span className='country-name'>United Arab</span>
                           </div>
                       </div>
                   </div>
                    <div className='rev-write'>
                        “I Would like to thank all the employees of the place, No specific name is to be mentioned here! cause they all work as a team from the janitor to the duty manager. Really Thank you Guys for making the hotel gusts feel confutable and safe. Location:...”
                    </div>
               </div>
           </div>
           <div>
               <div className='review-box'>
                   <div className='reviewer'>
                       <div className='icon-rev'>
                           A
                       </div>
                       <div className='rev-name'>
                           <div className='rev-title'>Ahmed</div>
                           <div className='rev-country'>
                               <img src={flag} className='flag'/> <span className='country-name'>United Arab</span>
                           </div>
                       </div>
                   </div>
                    <div className='rev-write'>
                        “I Would like to thank all the employees of the place, No specific name is to be mentioned here! cause they all work as a team from the janitor to the duty manager. Really Thank you Guys for making the hotel gusts feel confutable and safe. Location:...”
                    </div>
               </div>
           </div>
           <div>
               <div className='review-box'>
                   <div className='reviewer'>
                       <div className='icon-rev'>
                           A
                       </div>
                       <div className='rev-name'>
                           <div className='rev-title'>Ahmed</div>
                           <div className='rev-country'>
                               <img src={flag} className='flag'/> <span className='country-name'>United Arab</span>
                           </div>
                       </div>
                   </div>
                    <div className='rev-write'>
                        “I Would like to thank all the employees of the place, No specific name is to be mentioned here! cause they all work as a team from the janitor to the duty manager. Really Thank you Guys for making the hotel gusts feel confutable and safe. Location:...”
                    </div>
               </div>
           </div>  
        </OwlCarousel>  
        </div>
    </div>
      </div>
  )
}

export default Description