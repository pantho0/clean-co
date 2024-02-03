import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="flex-none hidden lg:block">
            <div className='flex gap-2'>
              {/* Navbar menu content here */}
              <NavLink to='/about' className={({isActive})=> isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>About</NavLink>
              <NavLink to='/contact' className={({isActive})=> isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Contact</NavLink>
              <NavLink to='/login' className={({isActive})=> isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Login</NavLink>
              <NavLink to='/register' className={({isActive})=> isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Register</NavLink>
            </div>
          </div>
    );
};

export default Navbar;