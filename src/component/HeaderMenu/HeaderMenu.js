import React, { useContext } from 'react'
import imgBook from '../../Images/book.png'
import './HeaderMenu.css';
import { BookContext } from './../../context/book';
export default function HeaderMenu() {
  const { balance } = useContext(BookContext)

  return (
    <div className='HeaderMenu'>
      <div className="logoShop">

        <img src={imgBook} alt="book" />
        <p>Магазин книг</p>
      </div>
      <p><span>Баланс</span>:{balance} ₽.</p>
    </div>
  )
}
