import {useEffect, useState} from 'react'
const width = 8
const candyColors=[
    'blue',
    'green',
    'orange',
    'purple',
    'red',
    'yellow'
]


const candyCrush = () => {
 const [currentColorArrangement, setCurrentColorArrangement] = useState([])
    
    function createBoard() {
        const randomColorArrangement = []
        for (let i = 0; i < width * width; i++) {
        const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)]
        randomColorArrangement.push(randomColor)  
        }
       setCurrentColorArrangement(randomColorArrangement)
    }
    useEffect(() => {
      createBoard()
    }, [])
    
    console.log(currentColorArrangement);
    return <div>Welcome to Candy Crush</div>;
    <div className='app'>
        <div className='game'>

        </div>
    </div>
}


export default candyCrush;

