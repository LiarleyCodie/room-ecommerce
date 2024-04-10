import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Layout() {

    return (
        <main className='font-sans min-h-screen'>
            <Navbar />
            <Outlet />
        </main>
    )
}

export default Layout
