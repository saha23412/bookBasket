import "./App.css";
import { useState, useContext, useEffect } from "react";
import BooksPost from "./component/BooksPost/BooksPost";
import HeaderMenu from './component/HeaderMenu/HeaderMenu';
import SearchSorted from "./component/SearchSorted/SearchSorted";
import Basket from "./component/Basket/Basket";
import { BookContext } from './context/book';
function App() {
  const { books, sumPurchases, setSumPurchases } = useContext(BookContext)
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSort, setSelectedSort] = useState('')

  const [booksArr, setBooksArr] = useState([])
  const handleValue = (searchTerm) => {
    setSearchTerm(searchTerm)
  }

  const addBookBasket = (elemenet, price) => {
    let isInArray = false
    booksArr.forEach(elem => {
      if (elem.name === elemenet.name) {
        isInArray = true
      }
    })
    if (!isInArray) {
      setBooksArr([...booksArr, elemenet])
      setSumPurchases(+sumPurchases + price)
    }


  }

  return books ? (
    <div className="App">

      <div className="header_search">
        <HeaderMenu />
        <SearchSorted
          onChange={handleValue}
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
          books={books}
        />
      </div>
      <div className="wrapper_basket_books">
        <div className="wrapper_books">

          {books.filter(book => {

            if (searchTerm === "") {
              return book

            } else if (book.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return book
            }
          
          
           return false
          }).map((book, index) => <BooksPost
            addBookBasket={addBookBasket}
            key={index}
            book={book} />)
          }
        
        </div>
        <Basket
          booksArr={booksArr}

        />
      </div>
    </div>
  ) : null;
}

export default App;
