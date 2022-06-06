import React, { useContext, useState } from 'react';
import categorias from '../../categoria.json'
import './SelectedCategoria.css'
import { BookContext } from './../../context/book';
const SelectedCategoria = ({ selectedSort, sortedArr, setSelectedSort, setDefaultValueOptio }) => {
    const { books, setBooks } = useContext(BookContext)
    const [arrCategoria, setArrCategoria] = useState([...books])
    const categoriaAll = () => {
        if (selectedSort === "minus") {

            setBooks([...arrCategoria].sort(sortedArr).reverse())
        } if (selectedSort === "plus") {

            setBooks([...arrCategoria].sort(sortedArr))
        }
        if (selectedSort === '') {
            setBooks([...arrCategoria])
        }

    }
    const sortCategorias = (categoria) => {

        arrCategoria.forEach((book) => {

            let isIdCategory = book.categoryId === categoria.id
            if (isIdCategory && (selectedSort === "plus" || selectedSort === "minus")) {
                if (selectedSort === "plus") {
                    setBooks([...arrCategoria].filter(book => book.categoryId === categoria.id).sort(sortedArr))
                } if (selectedSort === "minus") {
                    setBooks([...arrCategoria].filter(book => book.categoryId === categoria.id).sort(sortedArr).reverse())

                }


            } else if (selectedSort === '') {
                setBooks([...arrCategoria].filter(book => book.categoryId === categoria.id))
            }




        })
    }
    return (
        <div>
            <ul className='categoriaWrapper'>

                <p className='categorias'>Категории</p>
                <p className='categoriasAll' onClick={() => categoriaAll()}>Все категории</p>
                <div className='categorias'>
                    {categorias.map(categoria => <li className='categoriasElement' onClick={() => sortCategorias(categoria)} key={categoria.id}>{categoria.name}</li>
                    )
                    }
                </div>
            </ul>
        </div>
    );
}

export default SelectedCategoria;

