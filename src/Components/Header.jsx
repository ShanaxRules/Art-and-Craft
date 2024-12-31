import { Link, NavLink } from "react-router-dom";
import './Header.css';
import { useContext} from "react";
import { AuthContext } from "./AuthProvider";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

  

    const navbar = <>

        <NavLink to={'/'} className={'navlinker'}>Home</NavLink>
        <NavLink to={'/allcrafts'} className={'navlinker'}>AllCrafts</NavLink>
        {
            !user && <>
                <NavLink to={'/login'} className={'navlinker'}>Login</NavLink>
                <NavLink to={'/register'} className={'navlinker'}>Register</NavLink>
            </>

        }

        {
            user && <>
                <NavLink to={'/profile'} className={'navlinker'}>Profile</NavLink>
                <NavLink to={'/additem'} className={'navlinker'}>Add Item</NavLink>
                <NavLink to={'/myitems'} className={'navlinker'}>My Items</NavLink>
            </>
        }

    </>

    

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('Logged out successfully'))
            .catch(error => console.log(error));
    }

    return (
        <div>
            <div className="navbar bg-base-100 shadow-md shadow-blue-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navbar}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Shan&apos;s <span className="text-green-500">Arts</span> and <span className="text-red-600">Crafts</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navbar}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <h2 className="lg:flex md:flex hidden">
                            
                            {
                                // currentUser['displayName'] && <h2>{currentUser['displayName']}</h2>
                            }
                            {
                                user.displayName
                            }



                            </h2>
                            <a className="btn ml-3" onClick={handleLogOut}>Sign Out</a>
                        </>
                            :
                            <>
                                <Link to={'/login'}></Link>


                            </>
                    }
                </div>
            </div>

        </div>
    );
};

export default Header;