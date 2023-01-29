import BookCard from './BookCard';

const BookList = ({books, deleteBook}) =>{

    return (
        <div className="book-list">
            {books.map(book=>{
                return <BookCard key={book.id} book={book} deleteBook={deleteBook}/>
            })}   
        </div>
    );
}

export default BookList;