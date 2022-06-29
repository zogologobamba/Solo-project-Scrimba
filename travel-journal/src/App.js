import Cards from "./Cards"
import data from "./data"
import Navbar from "./Navbar"


export default function App() {
const cards = data.map(item => {
        
        return (
            <Cards 
            item={item}
             />
            )
        }
        )
    return (
        <div>
            
            {cards}
        </div>
    )
}