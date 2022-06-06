import React from 'react'
import MyButton from '../UI/MyButton/MyButton'
import './BooksPost.css'
export default function BooksPost({ book, addBookBasket }) {

  return (
    <div className='wrapper_book'>

      <div className='info_book'>

        <p className='book_name'><span>Название</span>:{book.name}.</p>
        <p className='book_author'><span>Автор</span>:{book.authorName}.</p>
        <img src={book.coverUrl} alt="book" />

        <div className='price_bth'>
          <p>{book.price} ₽.</p>
          <MyButton onClick={() => addBookBasket(book, book.price)}>В корзину</MyButton>
        </div>
      </div>
    </div>
  )
}

