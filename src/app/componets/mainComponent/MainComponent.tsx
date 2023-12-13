import React from 'react'
import Navbar from '../navbar/navbabr'
import Footer from '../footer/footer'

type Props ={
    children: string | JSX.Element | JSX.Element[] 

}

export default function MainComponent({children}: Props) {
  return (
    <>
    <Navbar/>
    <div>{children}</div>
    <Footer/>
    </>
  )
}
