import { Link, NavLink } from "react-router";
import user from '../../assets/user.png'

function Navbar() {
    return (
        <section className="bg-base-100">
            <div className="container mx-auto navbar shadow-sm">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost text-xl">AI Integration</Link>
                </div>
                <div className="mx-2 space-x-0.5">
                    <NavLink to='/' className="btn btn-outline btn-accent">Home</NavLink>
                    <NavLink to='/text' className="btn btn-outline btn-accent">Text</NavLink>
                    <NavLink to='/image' className="btn btn-outline btn-accent">Image</NavLink>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={user} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar
