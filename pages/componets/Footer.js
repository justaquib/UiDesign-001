import React from 'react'
import Icon from '@mdi/react'
import { mdiFacebook, mdiInstagram, mdiLinkedin, mdiTwitter } from '@mdi/js'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
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
                    <Link href="#contact">
                        Contact
                    </Link>
                    </div>
                    <div className='col-md-3'>
                    <Link href="#about" id="about">
                        About us
                    </Link>
                    </div>
                    <div className='col-md-3'>
                    <Link href="privacy">
                        Privacy Policy
                    </Link>
                    </div>
                    <div className='col-md-3'>
                    <Link href="termsandcondition">
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
