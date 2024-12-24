
import './App.css'
import Additionalinfo from './Components/Additonalinfo/Additionalinfo'
import Advertise from './Components/Advertise/Advertise'
import Banner from './Components/Banner/Banner'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import NewArrival from './Components/NewArrivals/NewArrival'

function App() {
 

  return (
    <>
     <div>
       <Navbar></Navbar>
       <Header></Header>
       <Banner></Banner>
       <Additionalinfo></Additionalinfo>
       <Advertise></Advertise>
       <NewArrival></NewArrival>
     </div>
    </>
  )
}

export default App
