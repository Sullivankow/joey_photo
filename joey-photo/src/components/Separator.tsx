import React from 'react'

const Separator: React.FC = () => {
  return (
    <div className="py-8" aria-hidden="true">
      <div className="mx-auto w-full flex justify-center">
        <div className="w-full max-w-2xl px-4">
          <svg className="w-full h-12" viewBox="0 0 800 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            {/* subtle beige background shape */}
            {/* <path d="M0 50 C100 10 200 90 400 50 C600 10 700 90 800 50 L800 100 L0 100 Z" fill="#F7F3EE" opacity="0.6" /> */}

            {/* main straight stroke */}
            <path d="M0 50 L800 50" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />

            {/* centered beige diamond */}
            <g transform="translate(400,50)">
              <rect x="-8" y="-8" width="16" height="16" fill="#D4C09E" transform="rotate(45)" rx="1" ry="1" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Separator
