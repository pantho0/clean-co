import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Navbar = () => {
    const {user, logout} = useAuth()
  
    return (
        <div className="flex-none hidden lg:block">
            <div className='flex gap-2'>
              {/* Navbar menu content here */}
              <NavLink to='/about' className={({isActive})=> isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>About</NavLink>
              <NavLink to='/contact' className={({isActive})=> isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Contact</NavLink>
              {user ? <button onClick={()=>logout()} className="btn btn-ghost btn-sm">Logout</button> : <NavLink to='/login' className={({isActive})=> isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Login</NavLink>}
              {user ? '' :  <NavLink to='/register' className={({isActive})=> isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Register</NavLink>}
            </div>
          </div>
    );
};

export default Navbar;