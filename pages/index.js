import Head from 'next/head'
import Icon from '@mdi/react'
import { mdiFacebook, mdiInstagram, mdiLinkedin, mdiTwitter } from '@mdi/js'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Head>
        <title>Alfa Network - Connecting People</title>
        <meta name="description" content="Alfa Network is the intersection of planning and technology helping you create amazing conferences, events, and incentives" />
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      <header>
        <div className="header">
          <nav className="navbar navbar-expand-lg">
            <div className="container border-bottom">
              <Link href="#" className="navbar-brand">
                <img className="rounded-pill d-inline-block align-text-center" src="https://media.istockphoto.com/vectors/creative-modern-letter-a-triangle-vector-icon-template-vector-id1173231564?k=20&amp;m=1173231564&amp;s=612x612&amp;w=0&amp;h=s3kJcZCv6xVLTONhx6wF0OTehFsCuhYVkea2JLsI3iM=" alt="alfa-logo" width="45"/>
                <span className='fw-bolder'>Alfa</span>Network
              </Link>
              <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="nav">
                  <li className="nav-item">
                    <Link href="#about" className='mx-2 p-2'>
                      About us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#events" className='mx-2 p-2'>
                      Events
                    </Link> 
                  </li>
                  <li className="nav-item">
                    <Link href="#" className='mx-2 p-2'>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

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
      <footer className='container-fluid mt-5'>
        <div className="header mb-md-5 py-5">
          <div className="col-md-12 text-center">
            <h1>Level up your attendee engagement</h1>
          </div>
        </div>
        <hr className='border' />
        <div className='row mt-5'>
          <div className='col-md-9 text-center'>
            <div className='row'>
              <div className='col-md-3'>
                <Link href="contact">
                  Contact
                </Link>
              </div>
              <div className='col-md-3'>
                <Link href="#about" id="about">
                  About us
                </Link>
              </div>
              <div className='col-md-3'>
                <Link href="privacy-policy">
                  Privacy Policies
                </Link>
              </div>
              <div className='col-md-3'>
                <Link href="terms-and-condition">
                  Terms and Conditions
                </Link>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <ul className="d-flex justify-content-center mb-4 px-0">
              <li className=''>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className='p-2 mx-2'>
                <Icon path={mdiFacebook}
                  title="Facebook"
                  size={1}
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className='p-2 mx-2'>
                  <Icon path={mdiTwitter}
                    title="Twitter"
                    size={1}
                    />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className='p-2 mx-2'>
                  <Icon path={mdiLinkedin}
                    title="LinkedIn"
                    size={1}
                    />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className='p-2 mx-2'>
                  <Icon path={mdiInstagram}
                    title="Instagram"
                    size={1}
                    />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-12 p-5 pb-4">
          <p className='text-center'>
            <span>&copy; Copyright 2022 </span>
            <span className='fw-bolder ts-xl'>Alfa</span>
            <span className='fw-thin'>Network.org</span>
          </p>
        </div>
      </footer>
    </>
  )
}
