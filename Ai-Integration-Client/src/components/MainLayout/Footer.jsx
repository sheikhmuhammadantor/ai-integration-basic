import { Link } from "react-router";
import logo from '../../assets/logo.png';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'

function Footer() {
    return (
        <section className="container mx-auto">
            <section className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
                <aside>
                    <Link to='/'>
                        <img className="w-16" src={logo} alt="AI Logo" />
                    </Link>
                    <p>
                        AI Integration Ltd.
                        <br />
                        Providing reliable tech since 2025
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <Link><FaFacebook /></Link>
                        <Link><FaYoutube /></Link>
                        <Link><FaTwitter /></Link>
                    </div>
                </nav>
            </section>
        </section>
    )
}

export default Footer
