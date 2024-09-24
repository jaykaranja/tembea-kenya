import React from 'react'

type Props = {
    text: string
}

const NavButton = (props: Props) => {
  return (
    <button className='text-white tracking-wider text-lg font-semibold hover:text-gray-300 transition duration-200'>{props.text}</button>
)
}

export default NavButton