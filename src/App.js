import axios from 'axios';
import {useState} from 'react';
import BookCreate from './Components/BookCreate';
import BookList from './Components/BookList';

const App = () =>{
    const [books, setBook] = useState([]);

    const createBook = async(title) => {
        const response = await axios.post('http://localhost:3001/books', {title: title});
        const newBook = [
            ...books,
            response.data
        ];
        setBook(newBook);
    }

    const deleteBook = (id) => {
        const newBook = books.filter(book => {
            return book.id !== id;
        });
        setBook(newBook);
    }

    const editBook = (id, newTitle) => {
        const updatedBook = books.map(book =>{
            if(book.id === id){
                return {
                    ...book, title: newTitle
                }
            }
            return book;
        });
        setBook(updatedBook);
    }

    return (
        <div className="app">
            <h1>Book List</h1>
            <BookList books={books} deleteBook={deleteBook} editBook={editBook}/>
            <BookCreate createBook={createBook}/>
        </div>
    );
}

export default App;