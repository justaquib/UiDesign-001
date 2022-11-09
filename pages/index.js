import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Footer from './componets/Footer';
import Header from './componets/Header';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])

  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
  });

       
  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
      const header = document.querySelector('.header-section');
      const scrollTop = window.scrollY;
      scrollTop >= 80 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
  };

  return (
    <>
      <Header/>
      <main className='container'>
        <div className='row my-md-5 my-4 mx-auto'>
          <div className='col-md-12'>
            <div className='row'> 
              <div className='col-md-12 col-lg-7'>
                <div className='card border-0 px-4 py-md-0 py-lg-8'>
                  <div className='card-body'>
                    <h1 className='text-capitalize text-xxxl fw-bolder'>
                      The intersection of planning and technology             
                    </h1>
                    <p className='text-capitalize'>Helping you create amazing conferences, events, and incentives</p>
                  </div>
                </div>
              </div>
              <div className='col-md-5'>
                <div className='card border-0 px-4 py-5'>
                  <img className='card-img shadow rounded hero-img' alt='' data-aos="zoom-in" data-aos-easing="ease-out"
                        data-aos-duration="600" src='https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row mb-md-5' id="events">
          <div className='col-md-12 d-none d-md-block'>
            <div className='row'>
              <div className='col-md-7'>
                <div className='row'>
                  <div className='col-md-6 mb-4'>
                    <div className='card shadow border-0 rounded bg-dark text-white'>
                      <div className='card-body p-5'>
                        <h1 className='fw-bolder text-hero'>
                          <span data-aos="fade-up" data-aos-easing="ease-out"
                                data-aos-duration="1000">
                          Events 
                          </span><br/> 
                        </h1>
                        <p className='text-capitalize'>Your event, Your data, Your experience</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6 mb-4'>
                    <div className='card shadow border-0 rounded' data-aos="zoom-in-down" data-aos-easing="ease-out" data-aos-duration="1000">
                      <img className='rounded' alt='' src='https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
                    </div>
                  </div>
                  <div className='col-md-12 mb-4'>
                    <div className='card shadow border-0 rounded' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1000">
                      <img className='card-img rounded' alt="" src="https://images.unsplash.com/photo-1545150665-c72a8f0cf311?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-5 mb-4'>
                <div className='card shadow border-0 rounded' data-aos="fade-left" data-aos-easing="ease-out" data-aos-duration="1000">
                  <img className='card-img rounded' alt="" src="https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row mb-md-5 py-6'>
          <div className='col-md-9 mx-auto'>
            <div className='card shadow border-0 rounded py-8 px-lg-6 px-md-0 bg-dark text-white'>
              <div className='card-body p-5'>
                <h1 className='fw-bolder text-hero'>
                  <span data-aos="fade-up" data-aos-easing="ease-out"
                        data-aos-duration="1000">
                    The Modern, 
                  </span><br/> 
                  <span data-aos="fade-up" data-aos-easing="ease-out"
                        data-aos-duration="1100">
                    Hassle-free Way 
                  </span><br/>
                  <span data-aos="fade-up" data-aos-easing="ease-out"
                        data-aos-duration="1200">
                    to Build Better 
                  </span><br/>
                  <span data-aos="fade-up" data-aos-easing="ease-out"
                        data-aos-duration="1300">
                    Events
                  </span>
                </h1>
                <div className='sm-border mt-3'></div>
                <div className='mt-5'>
                  <Link href="#">
                    Learn more about us &nbsp;
                    <span className='rounded-pill p-3 border'>
                      &#10230;
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row mb-md-5' id="about">
          <div className='col-md-9 mx-auto position-relative overflow-hidden'>
            <img src="https://ik.imagekit.io/4qrl0wfomb/Alfa-Network/does-it-all_8Bv1586bw.jpg" alt="" rel="" />
            <div className='col-lg-4 col-12 position-absolute top-50 start-50 left-10'>
              <div className='card border-0 shadow rounded px-4 py-5 bg-dark text-white' data-aos="fade-left" data-aos-duration="1000">
                <div className='card-body'>
                  <h1 className='text-capitalize'>
                    <span className='fw-bolder'>Alfa</span><span className='fw-normal'>Network</span><br/>
                    <span className='fw-light'>does it all</span>
                  </h1>
                  <p className='text-capitalize'>
                    From 10 people to 10 million. 
                    From a private in-person event to a virtual executive summit 
                    to a sold-out hybrid user conference. And everything in between.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-12 event-sm mt-5' id="events">
            <div className='card shadow border-0 rounded bg-white text-dark'>
              <div className='card-body p-5'>
                <h1 className='fw-bolder text-hero'>
                  <span data-aos="fade-up" data-aos-easing="ease-out"
                        data-aos-duration="1000">
                  Events 
                  </span><br/> 
                </h1>
                <p className='text-capitalize'>Your event, Your data, Your experience</p>
                <AwesomeSlider>
                  <div className='rounded'>
                    <img className='rounded' alt='' src='https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
                  </div>
                  <div className='rounded'>
                    <img className='rounded' alt="" src="https://images.unsplash.com/photo-1545150665-c72a8f0cf311?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                  </div>
                  <div className='rounded'>
                    <img className='rounded' alt="" src="https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" />
                  </div>
                </AwesomeSlider>
              </div>
            </div>
          </div>
      </main>
      <Footer />
    </>
  )
}
