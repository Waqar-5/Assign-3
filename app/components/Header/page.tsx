import React from 'react'


const Header = () => {
  return (
    <div className='  container pt-8 text-3xl'>
        <div className='flex justify-between items-center'>
            <div className='hover:text-amber-400 cursor-pointer ml-16 text-3xl font-medium'>Waqar Ali</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
               <li className='hover:text-amber-400 cursor-pointer'><a href='/' target='_blank'>Home</a></li>
                <li className='hover:text-amber-400 cursor-pointer'><a href='./components/About'>About</a></li>
                <li className='hover:text-amber-400 cursor-pointer'><a href='./components/Portfolio'>Portfolio</a></li>
                <li className='hover:text-amber-400 cursor-pointer'><a href='./components/Contact'>Contact</a></li>
            </ul>
            </div>
      
    </div>
  )
}

export default Header;


