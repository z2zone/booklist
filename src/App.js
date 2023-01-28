import {useState} from 'react';
import BookCreate from './Components/BookCreate';

const App = () =>{
    const [books, setBook] = useState([]);
    const createBook = (title) => {
        const newBook = [
            ...books,
            {id: new Date().valueOf(), bookTitle: title}
        ];
        setBook(newBook);
    }
    
    return (
        <div>
            {books.map(book =>(
                <div key={book.id}>
                    {book.bookTitle}
                </div>
            ))}
            <BookCreate createBook={createBook}/>
        </div>
    );
}

export default App;