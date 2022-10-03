import NavBar from './components/NavBar'
import './css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner1 from './components/Banner1'
import Banner2 from './components/Banner2'
import Banner3 from './components/Banner3'
import Footer from './components/Footer'


function App() {

  return (
    <div className='bgColorGlobal'>
      <NavBar />
      <Banner1 />
      <Banner2 />
      <Banner3 />
      <Footer />
    </div>
  )
}

export default App
