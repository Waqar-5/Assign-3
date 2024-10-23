import React from 'react'

export default function Portfolio() {
  return (
    <div id='protfolio' >
      <section className='text-4xl m-5 p-8 md:p-16 bg-gradient-to-r from-purple-100 via-indigo-400 text-center font-extrabold font-mono border-4 border-green-600 rounded-xl hover:bg-blue-500 cursor-pointer text-pink-600'>
       <h2 className='pb-8 text-blue-900 hover:text-red-600'> My Portfolio</h2>
        <p>
          Here are some projects on which I worked. 
          I do my best in thses projects which are give below....!
        </p>
        <div className='hover:bg-amber-400'>
          <div className='bg-white p-6 shadow-lg rounded-lg transition mb-5 text-center   '>
            <h2 className='text-4xl font-semibold mb-4 text-purple-600 hover:text-yellow-500 cursor-pointer ' >
              Project 1
            </h2>
            <p className='text-red-500 hover:text-red-700  '> A simple Colculator built with HTML, CSS and TypeScript.</p>
          </div>
          <div className='bg-white p-6 shadow-lg rounded-lg transition mb-5 text-center'>
            <h2 className='text-4xl font-semibold mb-4 text-purple-600 hover:text-yellow-500 cursor-pointer '>
              Project 2
            </h2>
            <p className='text-red-500 hover:text-red-700'>A menu-bar application built with HTML and CSS.</p>
          </div>
          <div className='bg-white p-6 shadow-lg rounded-lg transition mb-5 text-center'>
            <h2 className='text-4l font-semibold mb-4 text-purple-600 hover:text-yellow-500 cursor-pointer '>
              Project 3
            </h2>
            <p className='text-red-500 hover:text-red-700 '> A To-Do App built with React and TyepScript. </p>
          </div>


        </div>
      </section>
    </div>
  )
}
