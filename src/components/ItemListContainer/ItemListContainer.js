import {useEffect, useState} from 'react'
import {getItems, getItemsByType} from '../../asyncMock'
import {useParams, Link} from 'react-router-dom'


const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([])

    
    const {typeId}  = useParams()

useEffect(() => {

    const asyncFunction = typeId ? getItemsByType : getItems

    asyncFunction(typeId)
        .then(resolve => {
            setItems(resolve)
        })
        .catch(error => {
            console.log(error)
        })
}, [typeId])

    return (
        <div>    
            <h1 className='text-center mt-4 mb-6 text-[40px] font-bold text-red-400'>{greeting}</h1>
            <div className='flex max-w-[85%] m-auto flex-wrap' >
                {
                    items.map(item => {
                        return(
                            <div key={item.id} className='border-4 relative'>
                                <h2 className='font-bold text-center'>{item.name}</h2>
                                <img src={item.img} className='w-[250px]'/>
                                <Link to={`/item/${item.id}`} className='border-2 bottom-2 left-2 absolute bg-blue-100'> Ver Detalle </Link>
                            </div>
                    )
                    })
                }
            </div>
        </div>
    )
}

export default ItemListContainer