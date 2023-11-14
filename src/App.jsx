import Header from './components/Header'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <div className='container'>
        <div className='background1'>
          <Header />
          <Section1 />
        </div>
        <Section2 />
      </div>
      <div className="background2">
      <Contact />
      </div>
    </>
  )
}

export default App
