import {NavLink} from 'react-router-dom'

const Navbar = ()  => {
    return (
      <div className="relative z-10 h-[100px] bg-black pt-5 flex justify-between items-center px-[8.5%]">
        <NavLink to='/'>
          <h3 className="text-white font-bold text-[25px]">CALMIND</h3>
        </NavLink>
        <nav>
          <NavLink to='/talk-mind'> <button className="navbar-btn rounded-[1.5rem] mx-[40px] text-[1.5rem]">Talk Mind</button></NavLink>
          <NavLink to='/motivation'> <button className="navbar-btn rounded-[1.5rem] mx-[40px] text-[1.5rem]">Motivation</button></NavLink>
          <NavLink to='/talk-therapy'> <button className="navbar-btn rounded-[1.5rem] mx-[40px] text-[1.5rem]">Talk Therapy</button></NavLink>
        </nav>
        <button className="navbar-btn rounded-lg w-[75px] h-[41px] center hover:bg-gray-900">
          <img src="src\assets\sun.png" alt="" className="w-[60%] bg-transparent"/>
        </button>
      </div>
    )
}

export default Navbar