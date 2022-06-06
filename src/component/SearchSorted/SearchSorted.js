import React, { useContext, useState } from 'react'
import './SearchSorted.css'
import SelectedPrice from '../SelectedPrice/SelectedPrice';
import SelectedCategoria from '../SelectedCategoria/SelectedCategoria';
import { BookContext } from './../../context/book';

export default function SearchSorted({ onChange, selectedSort, setSelectedSort }) {
    const { books, setBooks } = useContext(BookContext)
    const handleValue = (event) => {
        onChange(event.target.value)
    }
    const [defaultValueOption, setDefaultValueOption] = useState('Сортировка')
    function sortedArr(a, b) {
        if (a.price > b.price) return 1
        if (a.price === b.price) return 0
        if (a.price < b.price) return -1
    }
    const sortBooks = (sort) => {
        setSelectedSort(sort)
        if (sort === "") setBooks([...books])
        if (sort === "plus") setBooks([...books].sort(sortedArr))

        if (sort === "minus") setBooks([...books].sort(sortedArr).reverse())


    }
    return (
        <div className='seacrhSection'>
            <div className='searchWrapper'>
                <div className='optionSorted'>
                    <div className='optionCategory'>

                        <SelectedCategoria
                            selectedSort={selectedSort}
                            setSelectedSort={setSelectedSort}
                            sortedArr={sortedArr}
                            setDefaultValueOption={setDefaultValueOption}
                        />

                    </div>
                    <div className='optionPrice'>
                        <SelectedPrice
                            value={selectedSort}
                            sortBooks={sortBooks}
                            selectedSort={selectedSort}
                            defaultValueOption={defaultValueOption}
                            options={[
                                { value: '', name: 'Без фильтра' },
                                { value: 'plus', name: 'По возрастанию' },
                                { value: 'minus', name: 'По убыванию' },
                            ]}
                        />
                    </div>
                </div>
                <div className='search'>
                    <input
                        className='searchLive'
                        type="text"
                        placeholder='Введите название'
                        onChange={handleValue}
                    />
                </div>

            </div>
        </div>
    )
}
