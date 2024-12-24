import React from 'react'
import Container from '../../Layouts/Container'
import New from '../../Layouts/New'
import Product from '../../Layouts/Product'


const NewArrival = ({news}) => {
    return (
        <div className='mt-[60px]'>
            <Container >
                <h1 className='font-DM font-bold text-[39px] text-primary'>New Arrivals</h1>
                <div className='flex justify-between mt[-10px]'>
                <Product news={true}></Product>
                <Product news={false}></Product>
                <Product news={true}></Product>
                <Product news={false}></Product>
                </div>
                
            </Container>
        </div>
    )
}

export default NewArrival