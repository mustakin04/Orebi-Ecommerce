import React from 'react'
import Container from '../../Layouts/Container'
import ad1 from "../../assets/Ad_1.png"
import ad2 from "../../assets/Ad_2.png"
import ad3 from "../../assets/Ad_3.png"
const Advertise = () => {
  return (
    <div className='mt-[60px]'>
        <Container className="flex justify-between">
            <div>
                <img src={ad1} alt="" />
            </div>
            <div >
                <div className='mb-[40px]'>
                    <img src={ad2} alt="" />
                </div>
                <div>
                    <img src={ad3} alt="" />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Advertise