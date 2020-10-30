import React from 'react'
import s from './search.module.scss'

export const Search = () => {
    return (
        <div className={s.search_container}>
            <input className={s.search_input} placeholder='Search...' />
            <span className={s.search_icon} />
        </div>
    )
}