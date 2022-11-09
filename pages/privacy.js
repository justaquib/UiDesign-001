import Link from 'next/link'
import React from 'react'
import Footer from './componets/Footer'
import Header from './componets/Header'

export default function privacy() {
  return (
    <>
        <Header/>
            <main className='container'>
                <div className='row mb-md-5 py-6'>
                    <div className='col-md-9 mx-auto'>
                        <div className='card shadow border-0 rounded py-8 px-lg-6 px-md-0 bg-dark text-white'>
                            <div className='card-body p-5'>
                                <h1 className='fw-bolder text-hero'>
                                <span data-aos="fade-up" data-aos-easing="ease-out"
                                        data-aos-duration="1000">
                                    Privacy Policy
                                </span><br/> 
                                
                                </h1>
                                <div className='sm-border mt-3'></div>
                                <div className='mt-5'>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac mattis urna, pretium facilisis ex. Mauris scelerisque neque a eros dictum, tincidunt interdum massa molestie. Nunc quis purus luctus, porttitor dolor vel, elementum urna. Phasellus vitae sem vitae odio sollicitudin accumsan in nec turpis. Nunc scelerisque, nulla nec ullamcorper rutrum, enim nulla posuere erat, vel volutpat enim diam at felis. Vestibulum tempor volutpat quam, ac dapibus eros semper nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent non eros vel dolor congue commodo. Nullam ornare, felis luctus porta cursus, elit mauris fringilla elit, vitae interdum enim purus nec orci. Nullam facilisis, lacus ut vulputate cursus, leo orci sodales lacus, sed efficitur mauris ante id mauris. Fusce tortor sem, lobortis et pharetra ut, sagittis eget massa. Aliquam interdum arcu elit, a volutpat turpis iaculis in. Morbi aliquet nulla id iaculis ullamcorper. Fusce congue augue in elit scelerisque tristique.
                                    </p>
                                    <p>
                                        Etiam tempor malesuada magna sed luctus. Fusce ut lacus vel elit euismod pulvinar. Curabitur sodales enim at gravida sagittis. Integer interdum mi justo, nec tempor orci scelerisque at. Nullam purus erat, consequat ultrices sodales ac, sagittis quis neque. Proin libero magna, vehicula ut mattis non, egestas nec lorem. In et posuere orci, at hendrerit arcu. Pellentesque sodales molestie quam.
                                    </p>
                                    <p>
                                        Quisque ornare est volutpat urna faucibus, non faucibus libero dapibus. Nunc ultricies nunc nisl, et porta sapien sodales nec. Integer a dolor tortor. Aenean in tempor nisl. Morbi eget pharetra sem. Suspendisse turpis urna, semper sit amet aliquam vel, tincidunt ut felis. Vivamus cursus risus id aliquam hendrerit. Etiam luctus fermentum euismod. In bibendum eget purus in porttitor. Praesent egestas gravida risus, et pretium turpis consectetur quis.
                                    </p>
                                    <p>
                                        Nullam maximus scelerisque sem, et accumsan arcu euismod id. Sed tincidunt arcu ac libero tempus, quis congue ipsum congue. Aliquam mattis sit amet dui nec interdum. Duis a magna at leo viverra ultrices ac vitae lorem. Morbi a erat sit amet leo gravida aliquam. Morbi laoreet turpis eu tincidunt pulvinar. Integer faucibus suscipit mattis. In vehicula velit vitae lacus sagittis mattis. Quisque ullamcorper purus lacus, nec viverra erat aliquet at. Sed egestas mollis ipsum, et efficitur velit cursus non. Phasellus varius velit ut feugiat efficitur. Sed quis mauris sollicitudin, tempus mi et, dapibus lacus. Phasellus ut urna ligula. Ut dolor ante, suscipit ut facilisis non, hendrerit ut nulla. Mauris placerat dolor id est laoreet ullamcorper.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        <Footer/>
    </>
  )
}
