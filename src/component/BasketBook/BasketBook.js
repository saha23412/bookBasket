import React, { useState, useContext } from 'react'
import deleteBook from '../../Images/deletes.png'
import './BasketBook.css'
import { BookContext } from './../../context/book';
export default function BasketBook({ book, booksArr }) {

    const { sumPurchases, setSumPurchases } = useContext(BookContext)


    const [amount, setAmount] = useState(1)
    function encrementAmount() {
        setAmount(amount + 1)
        setSumPurchases(+sumPurchases + book.price)

    }
    function decrementAmount() {
        if (amount === 1) {

            booksArr.splice(booksArr.indexOf(book), 1)
            setAmount(amount - 1)
            setSumPurchases(+sumPurchases - book.price)

        } else {
            setAmount(amount - 1)
            setSumPurchases(+sumPurchases - book.price)
        }
    }
    function deleteBookFromArr() {
        booksArr.splice(booksArr.indexOf(book), 1)
        setSumPurchases(sumPurchases - (amount * book.price))
        localStorage.clear('books')
        setAmount(amount - 1)

    }
    return booksArr.includes(book) ? (<>
        <div className='basketBooksWrapper'>
            <div onClick={() => deleteBookFromArr()} className='delteWrapper'>

                <img src={deleteBook} alt="deleteBook" />


            </div>
            <div className='basketBook'>
                <img src={book.coverUrl} alt="book" />
                <p style={{ marginTop: "5px", marginBottom: "5px" }}>{book.name}</p>
                <p> Цена за 1шт. {book.price} ₽.</p>
            </div>
            <div className='amountOperation'>
                <p className='encrement' style={{ cursor: 'pointer' }} onClick={() => encrementAmount()}>+</p>
                {
                    amount === 0 ? (
                        <p>{setAmount(amount + 1)}</p>
                    ) : <p className='amount'>{amount} <span>шт</span> </p>
                }
                <p className='decrement' onClick={() => decrementAmount()}>-</p>
            </div>


        </div>
    </>
    ) : null
}
