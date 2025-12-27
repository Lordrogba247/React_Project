import {outlet} from react-router-dom
import React from 'react'

function Layout  ()  {
  return (
    <Navbar />,
    <Header />,
    <Section />,
    <Footer />
  )
}

export default Layout