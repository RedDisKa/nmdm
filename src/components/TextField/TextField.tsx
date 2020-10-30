import React from 'react'
import s from './textfield.module.scss'

interface Props {
    title?: string,
    value: string,
    name?: string,
    onChange: (name: string, value: string) => void
}

export const TextField = ({title, name, value, onChange}: Props) => {
    return (
        <div className={s.textfield_container}>
            {title && <label htmlFor={name} className={s.label}>{title}</label>}
            <input id={name} className={s.textfield} value={value} onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event.target.id, event.target.value)} />
        </div>
    )
}
