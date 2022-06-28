import Cards from "./components/Cards"


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
            <nav>
                    <img src='../images/globe.png' />
                    <span>my travel journal.</span>  
            </nav>
            
            {cards}
        </div>
    )
}