import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <section className='flex flex-col min-h-screen'>
        <Header />
        <Main />
        <Footer />
      </section>
    </>
  )
}

export default App