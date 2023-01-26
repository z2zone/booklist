import {useState} from 'react';
import BookCreate from './Components/BookCreate';

const App = () =>{
    const [book, setBook] = useState([]);
    const createBook = (title) => {
        console.log("create this book:", title);
    }
    
    return (
        <div>
            <BookCreate createBook={createBook}/>
        </div>
    );
}

export default App;