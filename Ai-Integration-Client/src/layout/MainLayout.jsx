import { Outlet } from "react-router"
import Navbar from "../components/MainLayout/Navbar"
import Footer from "../components/MainLayout/Footer"

function MainLayout() {
    return (
        <div>
            <section>
                <Navbar />
            </section>
            <section className="min-h-[70vh] container mx-auto">
                <Outlet />
            </section>
            <section>
                <Footer />
            </section>
        </div>
    )
}

export default MainLayout
