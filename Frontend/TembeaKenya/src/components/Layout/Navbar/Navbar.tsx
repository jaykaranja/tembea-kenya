import React from 'react'
import Button from '../../Shared/Button'
import NavButton from './NavButton'


const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center py-4 px-10 h-[15%] bg-black border-b border-b-2'>
        <div className='flex gap-8'>
          <p className='text-white'>TembeaKenya</p>
          <div className='flex gap-6'>
            <NavButton text='PRIVATE RETREATS'/>
            <NavButton text='HOTELS & RESORTS'/>
            <NavButton text='RESIDENCES'/>
            <NavButton text='DINING'/>
            <NavButton text='MORE...'/>
          </div>
        </div>
        <div>
          <Button 
            onClick={() => alert("Hey man")}
            text={'Apply booking'}
            type={"primary"}
          />
        </div>
    </div>
  )
}

export default Navbar