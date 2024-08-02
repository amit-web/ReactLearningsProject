import React from 'react'

export const Button = ({children,
    type = "button",
    className = "",
    ...props
}) => {
  return (
       <>
           <div>
             <button type={type} className={className} {...props}>
              {children}
              </button>
           </div>

       </>
  )
}
