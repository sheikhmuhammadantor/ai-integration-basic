import { Outlet } from "react-router"
import Navbar from "../components/MainLayout/Navbar"

function CatLayout() {
    return (
        <div>
            <section>
                <Navbar />
            </section>
            <section className="min-h-fit container mx-auto">
                <Outlet />
            </section>
        </div>
    )
}

export default CatLayout
