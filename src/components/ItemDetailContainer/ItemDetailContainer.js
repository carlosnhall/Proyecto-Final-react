import { useEffect, useState } from 'react'
import { getItemById } from '../../asyncMock'
import { useParams } from 'react-router-dom'



const ItemDetailContainer = ({greeting}) => {

    const [item, setItem] = useState({})

    const {itemId} = useParams()
    console.log(itemId)

    useEffect(() => {
        getItemById(itemId)
            .then(resolve => {
                setItem(resolve)
            })
            .catch(error => {
                console.log(error)
            })
    }, [itemId])

    return (
        <div>
            <h2 className='text-center mt-4 mb-6 text-[40px] font-bold text-red-400'> {greeting}</h2>
            <div key={item.id} className='max-w-[500px] m-auto justify-center text-lg text-center'>
                <h2 className='font-bold m-6'>{item.name}</h2>
                <p className='m-6'>{item.desc}</p>
                <img src={item.img} className='w-[250px] m-auto'/>
                <p> Precio: ${item.price} USD</p> 
            </div>
        </div>
    )

}

export default ItemDetailContainer