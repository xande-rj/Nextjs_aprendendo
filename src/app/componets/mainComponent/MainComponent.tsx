import React, { ReactNode } from 'react'
import Navbar from '../navbar/navbabr'
import Footer from '../footer/footer'
import style from '../../styles/Main.module.css'

type Props ={
    children: string | JSX.Element | JSX.Element[] | ReactNode

}

export default function MainComponent({children}: Props) {
  return (
    <>
    <Navbar/>
    <div className={style.container}>{children}</div>
    <Footer/>
    </>
  )
}
