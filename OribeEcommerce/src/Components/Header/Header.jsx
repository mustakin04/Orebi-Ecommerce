import React, { useEffect, useState } from 'react'
import Container from '../../Layouts/Container'
import Flex from '../../Layouts/Flex'
import { HiMiniBars2 } from "react-icons/hi2";
import Search from './Search';
import { MdMan } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiLuggageCartFill } from "react-icons/ri";
import Dropdown from '../../Layouts/Dropdown';
import { useRef } from 'react';



const Header = () => {
    const [categoryshow, setCategoryShow] = useState(false)
    const [accountShow, setAccountShow] = useState(false)

    let categoryRef = useRef()
    let accountRef = useRef()

    useEffect(() => {
        document.body.addEventListener('click', (e) => {
            if (categoryRef.current.contains(e.target)) {
                setCategoryShow(true)
            }
            else {
                setCategoryShow(false)
            }


            if (accountRef.current.contains(e.target)) {
                setAccountShow(true)
            }
            else {
                setAccountShow(false)
            }
        })

    })

    return (
        <div className='bg-[#F5F5F3] py-[25px] ' >
            <Container>
                <Flex className='justify-between items-center'>
                    <Dropdown dropRef={categoryRef} >
                        <div className='flex items-center gap-[10px]'>
                            <HiMiniBars2 />
                            <p className='font-DM font-normal text-[14px] text-primary'>Shop by Category</p>
                        </div>
                        {
                            categoryshow && (
                                <div >
                                    <ul className='absolute w-[263px] bg-primary z-[999]' >
                                        <li
                                            className='border-[1px] border-white border-opacity-10 py-[16px]  
                                font-DM font-normal text-[14px] pl-[21px] text-white hover:ml-[9px] hover:font-bold'>Accesories</li>
                                        <li className='border-[1px] border-white border-opacity-10 py-[16px]  
                                font-DM font-normal text-[14px] pl-[21px] text-white hover:ml-[9px] hover:font-bold '>Furniture</li>
                                        <li className='border-[1px] border-white border-opacity-10 py-[16px]  
                                font-DM font-normal text-[14px] pl-[21px] text-white hover:ml-[9px] hover:font-bold'>Electronics</li>
                                        <li className='border-[1px] border-white border-opacity-10 py-[16px]  
                                font-DM font-normal text-[14px] pl-[21px] text-white hover:ml-[9px] hover:font-bold'>Clothes</li>
                                        <li className='border-[1px] border-white border-opacity-10 py-[16px]  
                                font-DM font-normal text-[14px] pl-[21px] text-white hover:ml-[9px] hover:font-bold'>Bags</li>
                                        <li className='border-[1px] border-white border-opacity-10 py-[16px]  
                                font-DM font-normal text-[14px] pl-[21px] text-white hover:ml-[9px] hover:font-bold'>Home appliances</li>
                                    </ul>
                                </div>
                            )
                        }
                    </Dropdown>
                    <div className=''>
                        <Search className="py-[16px] pl-[21px] pr-[436px]  outline-none"
                            placeholder="search" ></Search>

                    </div>
                    <div className='flex '  >
                        <div className='relative'>
                            <div className='flex' ref={accountRef}>
                                <MdMan />
                                <IoMdArrowDropdown className='ml-[10px]' />
                            </div>
                            {
                                accountShow && (
                                    <div className='absolute top-[20px] right-0 w-[200px] z-[99]'>
                                        <p className='font-DM font-bold text-[14px] text-white
                                         bg-primary py-[16px] text-center'>MY Account</p>
                                        <h2 className='font-DM font-normal text-[14px] text-black
                                         bg-red-200 py-[16px] h-[50px] text-center'>Log Out</h2>
                                    </div>)
                            }
                        </div>
                        <RiLuggageCartFill className='ml-[41px]' />

                    </div>

                </Flex>
            </Container>
        </div>
    )
}

export default Header