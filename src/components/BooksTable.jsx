import React from 'react'

function BooksTable() {
const booksList = [
    { id: 1, name: 'שח-מט', author: 'משה כהן', pages: 150, category: 'דרמה' },
    { id: 2, name: 'לא ליפול', author: 'דוד סופר', pages: 300, category: 'מתח' },
    { id: 3, name: 'ילדה קטנה', author: 'שרה לוי', pages: 200, category: 'מרדש' },
  ];

  return (
    <div style={{ backgroundColor: 'lightblue' , padding: '20px' }}>
      <h2>טבלת ספרים</h2>
      
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>מזהה</th>
            <th>שם הספר</th>
            <th>מחבר</th>
            <th>מספר עמודים</th>
            <th>קטגוריה</th>
          </tr>
        </thead>
        <tbody>
          {booksList.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td>{book.pages}</td>
              <td>{book.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BooksTable