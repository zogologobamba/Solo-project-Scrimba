import Cards from "./Cards"
import data from "./data"


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