import Link from 'next/link'
import React from 'react'
import { PageRoutes } from '../../../constents'
import Navbar from './navbar'

const Header = () => {
  return (
    <header className='mx-auto w-[90%] px-4 py-5 flex justify-between'>
     <h1 className='text-2xl'> <Link href={PageRoutes.Logo}>
       🍕 Pizza
      </Link></h1>
      <Navbar/>
    </header>
  )
}

export default Header
