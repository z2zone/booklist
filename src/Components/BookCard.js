import { useState } from 'react';
import BookEdit from './BookEdit';

const BookCard = ({book, deleteBook}) =>{
    const [showEdit, setShowEdit] = useState(false);

    const handleDelete = () => {
        deleteBook(book.id);
    }
    const handleEdit = () => {
        setShowEdit(!showEdit);
    }
    return (
        <div className="book-show">
            {!showEdit ? book.title : <BookEdit/>}
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