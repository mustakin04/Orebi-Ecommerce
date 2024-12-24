import React from 'react'
import im1 from "../../src/assets/clock.png"
import New from './New';
const Product = ({news}) => {
    return (
        <div className='relative'>
            <img src={im1} alt="" />
            {
                news &&(<New title="New" className=" absolute top-[20px] left-[20px] inline-block 
                    py-[8px] px-[31px] bg-primary font-DM font-blod text-[14px] text-white"></New>)
            }
        </div>
    )
}

export default Product