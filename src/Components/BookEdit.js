import { useState } from 'react';

const BookEdit = ({book, handleEditSubmit}) =>{
    const [editText, setEditText] = useState(book.title);
    const handleEditText = (event) => {
        setEditText(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        handleEditSubmit(book.id, editText);
    }

    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label htmlFor="">Title</label>
            <input type="text" value={editText} onChange={handleEditText}/>
            <button className="button is-primary">Save</button>
        </form>
    );
}

export default BookEdit;