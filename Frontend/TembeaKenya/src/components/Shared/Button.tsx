import React from 'react'

type Props = {
    onClick: (e?: unknown) => unknown,
    text: string,
    type: 'danger' | 'default' | 'primary'
}

const Button = (props: Props) => {
  return (
    <button
        onClick={props.onClick}
        className={(    
            props.type === 'danger' ? "bg-red-800" :
            props.type === 'default' ? "bg-gray-800" :
            props.type === 'primary' ? "bg-white" :
            "") +
            " rounded py-2 px-4 text-sm"
        }
    >
        {props.text}
    </button>
  )
}

export default Button