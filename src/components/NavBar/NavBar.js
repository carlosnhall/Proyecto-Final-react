import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return(
        <nav className= 'flex justify-end bg-orange-200'>
            <div className = ' text-red-500 my-auto text-[35px] font-bold leading-none align-middle w-[33%]'>
                <h1>G A M E L A N D</h1>
            </div>
            <div>
                <button className='m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>ACCION</button>
                <button className='m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>RPG</button>
                <button className='m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>MMO</button>
                <button className='m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>ESTRATEGIA</button>
            </div>
            <CartWidget  />
        </nav>
    )
}

export default NavBar