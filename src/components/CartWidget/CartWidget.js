import cartIcon from  './media/cart.png'

const CartWidget = () => {
    return (
        <div className='relative'>
            <img src= {cartIcon}  className='max-h-[50px] mr-5 ml-6'  alt="Icono de carrito de compras"/>
            <p className='leading-none pl-[6px] pt-[1px] absolute bottom-[3px] right-[8px] text-white bg-red-500 rounded-xl w-[20px] h-[20px] align-middle' >{7}</p>
            
        </div>

    )
}

export default CartWidget