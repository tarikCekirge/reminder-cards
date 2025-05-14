import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Archive from './components/Archive'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <section className='flex flex-col min-h-screen'>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </section>
    </>
  )
}

export default App