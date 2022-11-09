import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <>
    <Head>
    <title>Alfa Network - Connecting People</title>
        <meta name="description" content="Alfa Network is the intersection of planning and technology helping you create amazing conferences, events, and incentives" />
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Head>
    <header className=''>
        <div className="header">
          <nav className="navbar navbar-expand-lg header-section">
            <div className="container border-bottom">
              <Link href="/" className="navbar-brand">
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
    </>
  )
}
