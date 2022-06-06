import { createContext, useEffect, useState } from "react";
export const BookContext = createContext()
const BookProvider = ({ children }) => {
    const [books, setBooks] = useState(null)
    const balanceFromLocalStorage = JSON.parse(localStorage.getItem("balance") || '30200')
    const [balance, setBalance] = useState(balanceFromLocalStorage)
    const [sumPurchases, setSumPurchases] = useState('0')
    const url = "http://45.8.249.57/bookstore-api/books";

    const xhr = new XMLHttpRequest();
    useEffect(() => {
        localStorage.setItem("balance", JSON.stringify(balance))
    }, [balance])
    useEffect(() => {
        let isMounted = false;
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (!isMounted) {
                    const booksArr = xhr.responseText
                    const booksParse = JSON.parse(booksArr)
                    setBooks(booksParse)


                }
            }
        };

        const data = `{
    "filters": {}
}`;

        xhr.send(data);
        return () => {
            isMounted = true
        }
    }, []);
    return <BookContext.Provider value={{ balance, books, setBooks, setBalance, sumPurchases, setSumPurchases }}>{children}</BookContext.Provider>
}
export default BookProvider