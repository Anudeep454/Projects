import React from 'react'

const Book = ({bookdata}) =>
{
    return (
      
    <div className='book'>
            <h1>{bookdata.title}</h1>
            <p>{bookdata.author}</p>
            <p>{bookdata.year}</p>
            <a href={bookdata.link} rel="noreferrer" target='_blank'><button>See Details</button></a>
            
        </div>
        
  )
}

Book.defaultProps = {
    bookdata: {
        title: 123,
        author: "ndsh",
        year: 2050,
        link:'wwww.google.com'
    }
}

/* prop drilling */

export default Book
