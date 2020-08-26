import React, { Children } from 'react';
import { Container } from 'semantic-ui-react'
import NavBar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer'



const Layout: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container as='main' text>
      {children}
      </Container>
      <Footer />
    </>
  )
}

export default Layout