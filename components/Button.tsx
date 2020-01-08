import React, {MouseEventHandler} from 'react'
interface ButtonProps {
    onClick: MouseEventHandler
    children: React.ReactChild
}
const Button: React.FunctionComponent<ButtonProps> = ({children, onClick}) => (
    <button
        className=" p-2 bg-blue-400 text-white rounded-sm hover:bg-blue-600 focus:bg-blue-400 focus:border-blue-900 focus:outline-none"
        onClick={onClick}
    >
        {children}
    </button>
);

export default Button