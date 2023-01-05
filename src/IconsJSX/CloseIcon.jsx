import React from 'react'

const CloseIcon = (props) => {
  return (
    <>
        <svg
            width={16}
            height={18}
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
              <path
                  d="m14.364.222 1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z"
                  fillRule="evenodd"
              />
        </svg>
    
    </>
  )
}

export default CloseIcon