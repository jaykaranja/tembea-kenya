import React from 'react'
import Button from '../../Shared/Button'
import NavButton from './NavButton'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center py-4 px-6 md:px-10 h-[12%] md:h-[15%] bg-black border-b border-b-2'>
        <div className='flex gap-8'>
          {/* <p className='text-white'>TembeaKenya</p> */}
          <div className='flex items-center text-sm gap-4'>
            <MenuRoundedIcon 
              className='text-white'
              fontSize='inherit'
            />
            <p className='text-sm md:text-lg font-semibold text-white'>Tembea Kenya</p>
          </div>
          <div className='hidden md:flex gap-6 '>
            <NavButton text='PRIVATE RETREATS'/>
            <NavButton text='HOTELS & RESORTS'/>
            <NavButton text='RESIDENCES'/>
            <NavButton text='DINING'/>
            <NavButton text='MORE...'/>
          </div>
        </div>
        <div>
          <Button 
            onClick={() => null}
            text={'Apply booking'}
            type={"primary"}
          />
        </div>
    </div>
  )
}

export default Navbar