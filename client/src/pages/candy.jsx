import {useState} from 'react'
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
    
    const createBoard = () => {
        const randomColorArrangement = []
        for (let i = 0; i < width * width; i++) {
        const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)]
        randomColorArrangement.push(randomColor)  
        }
        // console.log(randomColorArrangement);
    }
    createBoard()
    return <div>Welcome to Candy Crush</div>;
}


export default candyCrush;

