import {useState} from 'react';

const BookCreate = ({createBook}) => {
    const [input, setInput] = useState("");
    const handleInput = (event) => {
        setInput(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(input);
        setInput("");
    }
    return (
        <div className="book-create">
            <h3>Add a book</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    className="input"
                    type="text" 
                    placeholder='enter book'
                    value={input}
                    onChange={handleInput}
                />
                <button className="button">register</button>
            </form>
        </div>
    );
}

export default BookCreate;