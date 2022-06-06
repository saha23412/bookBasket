import React from 'react'

export default function Selected({ options, sortBooks, selectedSort }) {
    return (
        <select
            value={selectedSort || ""}
            onChange={e => sortBooks(e.target.value)}
        >
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>

    )
}
