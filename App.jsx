import React, { useState } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([
    { title: '1984', author: 'George Orwell' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addBook = () => {
    if (!newTitle.trim() || !newAuthor.trim()) return;
    setBooks([...books, { title: newTitle, author: newAuthor }]);
    setNewTitle('');
    setNewAuthor('');
  };

  const removeBook = (index) => {
    const updated = [...books];
    updated.splice(index, 1);
    setBooks(updated);
  };

  return (
    <div className="container">
      <h2>Library Management</h2>

      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="add-book">
        <input
          type="text"
          placeholder="New book title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="New book author"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
        />
        <button onClick={addBook}>Add Book</button>
      </div>

      {filteredBooks.map((book, index) => (
        <div key={index} className="book-item">
          <strong>{book.title}</strong> by {book.author}
          <button onClick={() => removeBook(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default App;
