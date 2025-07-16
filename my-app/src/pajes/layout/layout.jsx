import logoHs from '@/assets/PNG.png'





export default function Layout() {
    

    return(<>
    
    
    <header>
        <div className='flex items-center'>
            <img className='w-[60px]' src={logoHs} alt="" />
            <div>
                <h1 className='font-semibold text-[20px]'>Cambridge</h1>
                <h2>School</h2>
            </div>
        </div>
    </header>
    
    </>)
}