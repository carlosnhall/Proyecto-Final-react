const items = [

    {
        id: '0',
        name: 'Diablo 4',
        desc: 'Diablo® IV es un RPG de acción de última generación en el que tendrás que acabar con incontables males, dominar un sinfín de facultades, superar mazmorras de pesadilla y coleccionar botín legendario.',
        type: 'arpg',
        price: 75,
        stock: 1500,
        img: '/img/diablo4.jpeg'
    },
    {
        id: '1',
        name: 'Path of Exile',
        desc: 'Eres un exiliado que lucha por sobrevivir en el continente oscuro de Wraeclast, mientras luchas para obtener el poder que te permitirá vengarte de aquellos que te hicieron daño. Creado por jugadores incondicionales, Path of Exile es un RPG de acción en línea ambientado en un mundo de fantasía',
        type: 'arpg',
        price: 35,
        stock: 450,
        img: '/img/pathOfExile.jpg'
    },
    {
        id: '2',
        name: 'Last Epoch',
        desc: 'Last Epoch es un juego de rol de acción hack and slash de acceso anticipado desarrollado por Eleventh Hour Games. En abril de 2018, se lanzó una demostración jugable gratuita como parte de la campaña Kickstarter de Last Epoch.',
        type: 'arpg',
        price: 45,
        stock: 40,
        img: '/img/lastEpoch.jpg'
    },
    {
        id: '3',
        name: 'Wolcen',
        desc: 'Wolcen: Lords of Mayhem es un videojuego de rol de acción y exploración de mazmorras desarrollado y publicado por Wolcen Studios y lanzado para Windows en febrero de 2020.',
        type: 'arpg',
        price: 48,
        stock: 150,
        img: '/img/wolcen.jpeg'
    },
    {
        id: '4',
        name: 'New World',
        desc: 'New World es un emocionante MMO de mundo abierto repleto de peligros y oportunidades en el que forjarás tu destino en la isla sobrenatural de Aetérnum.',
        type: 'mmo',
        price: 65,
        stock: 400,
        img: '/img/newWorld.jpg'
    },
    {
        id: '5',
        name: 'World of Warcraft',
        desc: 'World of Warcraft es un videojuego de rol multijugador masivo en línea desarrollado por Blizzard Entertainment. Es el cuarto juego lanzado establecido en el universo fantástico de Warcraft, el cual fue introducido por primera vez por Warcraft: Orcs & Humans en 1994.​',
        type: 'mmo',
        price: 79,
        stock: 390,
        img: '/img/worldWarcraft.gif'
    },
    {
        id: '6',
        name: 'Lost Ark',
        desc: 'Embárcate en una odisea en el gigantesco y vibrante mundo de Lost Ark: explora lugares desconocidos, busca tesoros perdidos y ponte a prueba con la emocionante acción y combate de este RPG de acción gratuito. ',
        type: 'mmo',
        price: 25,
        stock: 400,
        img: '/img/lostArk.jpeg'
    },
    {
        id: '7',
        name: 'Battlefield 2042',
        desc: 'Battlefield 2042 es un videojuego de disparos y acción bélica en primera persona, desarrollado por EA Digital Illusion CE, Criterion Games, Ripple Effect y distribuido por Electronic Arts',
        type: 'action',
        price: 99,
        stock: 580,
        img: '/img/battlefield2042.jpg'
    },
    {
        id: '8',
        name: 'Call of Duty Modern Warfare 2',
        desc: 'Call of Duty: Modern Warfare II es un videojuego de disparos en primera persona desarrollado por Infinity Ward y publicado por Activision, lanzandose para PlayStation 4, PlayStation 5, Xbox One, Xbox Series X y Series S y Microsoft Windows​.',
        type: 'action',
        price: 105,
        stock: 5000,
        img: '/img/callOfDutymm2.jpg'
    },
    {
        id: '9',
        name: 'Counter Strike Global Offensive',
        desc: 'Counter-Strike: Global Offensive (CS:GO) amplía el juego de acción por equipos del que fue pionero cuando salió hace más de 20 años. CS:GO incluye nuevos mapas, personajes, armas y modos de juego, y ofrece versiones actualizadas del contenido clásico de Counter-Strike (de_dust2, etc.).',
        type: 'action',
        price: 45,
        stock: 530,
        img: '/img/counterStrikego.jpg'
    },

]

export const getItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items)
        }, 100)
    })
}

export const getItemsByType = (typeId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items.filter(item => item.type === typeId))
        }, 100)
    })
}

export const getItemById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items.find(item => item.id === itemId))
        }, 100)
    })
}