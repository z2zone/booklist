import BookCard from './BookCard';

const BookList = ({books, deleteBook, editBook}) =>{

    return (
        <div className="book-list">
            {books.map(book=>{
                return <BookCard key={book.id} book={book} deleteBook={deleteBook} editBook={editBook}/>
            })}   
        </div>
    );
}

export default BookList;