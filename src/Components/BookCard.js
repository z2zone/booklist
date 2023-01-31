import { useState } from 'react';
import BookEdit from './BookEdit';

const BookCard = ({book, deleteBook, editBook}) =>{
    const [showEdit, setShowEdit] = useState(false);

    const handleDelete = () => {
        deleteBook(book.id);
    }
    const handleEdit = () => {
        setShowEdit(!showEdit);
    }
    const handleEditSubmit = (id, newTitle) => {
        setShowEdit(false);
        editBook(id, newTitle);
    }
    return (
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}300/200`} alt="pictures" />
            {!showEdit ? book.title : <BookEdit book={book} handleEditSubmit={handleEditSubmit}/>}
            <div className="actions">
                <button 
                    className="edit"
                    onClick={handleEdit}
                >
                    Edit
                </button>
                <button 
                    className="delete"
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default BookCard;