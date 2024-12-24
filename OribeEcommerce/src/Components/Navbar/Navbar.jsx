import React from 'react'
import logo from "../../assets/OREBI©.png"
import Flex from '../../Layouts/Flex'

const Navbar = () => {
    return (
        <div >
            <div className='container mx-auto py-[32px]'>
                <div className='flex'>
                    <div className='w-[20%]'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='w-[80%] '>
                        <ul >
                            <Flex className='justify-end gap-[40px] font-DM font-normal text-[14px] text-[#767675]'>
                            <li className='hover:text-[#262626] hover:font-bold ' >Home</li>
                            <li className='hover:text-[#262626] hover:font-bold'>Shop</li>
                            <li className='hover:text-[#262626] hover:font-bold'>About</li>
                            <li className='hover:text-[#262626] hover:font-bold'>Contacts</li>
                            <li className='hover:text-[#262626] hover:font-bold'>Journal</li>
                            </Flex>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar