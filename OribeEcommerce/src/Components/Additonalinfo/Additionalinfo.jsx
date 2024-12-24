import React from 'react'
import { RiNumber2 } from "react-icons/ri";
import Container from '../../Layouts/Container';
import Flex from '../../Layouts/Flex';
import { MdLocalShipping } from "react-icons/md";
import { GiAnticlockwiseRotation } from "react-icons/gi";


const Additionalinfo = () => {
    return (
        <div>
            <Container className="py-[21px]">
                <Flex className="justify-between">
                    <div className='flex gap-[17px] text-[#262626]'>
                        <RiNumber2 className='text-2xl' />
                        <p className='font-DM font-normal text-[16px]'>Two years warranty</p>
                    </div>
                    <div className='flex gap-[17px] text-[#262626]'>
                        <MdLocalShipping className='text-2xl' />
                        <p className='font-DM font-normal text-[16px]'>Free shipping</p>
                    </div>
                    <div className='flex gap-[17px] text-[#262626]'>
                        <GiAnticlockwiseRotation className='text-2xl' />
                        <p className='font-DM font-normal text-[16px]'>Return policy in 30 days</p>
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default Additionalinfo