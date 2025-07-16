import logoHs from '@/assets/PNG.png'
import { Link, Outlet } from 'react-router-dom'
import Button from '@mui/material/Button';




export default function Layout() {


    return (<>


        <header className='flex w-[90%] m-auto justify-between items-center  lg:px-[40px] lg:py-[30px]  '>
            <div className='flex items-center'>
                <img className='w-[60px]' src={logoHs} alt="" />
                <div>
                    <h1 className='font-semibold text-[20px]'>Cambridge</h1>
                    <h2>School</h2>
                </div>
            </div>

            <div className='flex gap-[30px]'>


            <Link to={'/'}>
                <h1 className='font-bold text-[30px]'>Home</h1>
            </Link>

            <Link to={'/debtor'}>
                <h1 className='font-bold text-[30px]'>Debtor</h1>
            </Link>
            </div>
            <Link to={'/login'}>
             <Button variant="outlined" size="medium">   Login </Button>
            </Link>


        </header>


        <main className='mt-[50px]'><Outlet /></main>
    </>)
}