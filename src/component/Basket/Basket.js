import React, { useState, useContext } from 'react'
import imgBasket from '../../Images/basket.png'
import './Basket.css'
import BasketBook from '../BasketBook/BasketBook';
import imgSad from '../../Images/sad.png'
import MyButton from './../UI/MyButton/MyButton';
import { BookContext } from './../../context/book';
export default function Basket({ booksArr }) {
  const { sumPurchases, balance, setBalance, setSumPurchases } = useContext(BookContext)

  function payBooks() {
    setStyles('block')
    booksArr.length = 0
    setBalance(balance - sumPurchases)
    localStorage.clear("books")
    setSumPurchases(0)
  }

  const [styled, setStyles] = useState('none')
  return (
    <div className='basketWrapper'>
      <div style={{ display: `${styled}` }} className='messageInfo'>
        <p className='messageBuy'>Успешная покупка.</p>
        <p className='messageDelete' onClick={() => setStyles('none')}> Скрыть уведомления.</p>

      </div>
      <div className='infoBasket'>
        <p>Корзина</p>
        <img src={imgBasket} alt="basket" />
      </div>
      <div className='wrapper_books_arr'>
        {
          booksArr.length > 0 ? (
            booksArr.map((book, index) => (
              <BasketBook
                book={book}
                key={index}
                booksArr={booksArr}
              />

            ))
          ) : <><p style={{ marginTop: "35px", marginBottom: "20px" }}>Корзина пуста ...</p>
            <img style={{ width: '64px' }} className='sad' src={imgSad} alt="sad" />
          </>

        }
      </div>
      {
        booksArr.length > 0 ? (
          <div className='sumPurchases'>
            <p>Cтоимость покупок:{sumPurchases} ₽.</p>
            {
              sumPurchases > balance ? (<>
                <p className='noMoney'> У вас недостаточно средств <br />
                  пополните баланс
                </p>
                <MyButton disabled style={{ marginTop: "15px" }} onClick={() => payBooks()}>Оплатить</MyButton>
              </>
              ) : <>
                <MyButton className='bth' style={{ marginTop: "15px" }} onClick={() => payBooks()}>Оплатить</MyButton>

              </>

            }
          </div>
        ) : null


      }
    </div>
  )
}
