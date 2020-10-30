import React from 'react'
import s from './checkbox.module.scss'

interface Props {
    title: string,
    value: boolean,
    name: string,
    onChange: (name: string, value: boolean) => void
}

export const Checkbox = ({title, name, value, onChange}: Props) => {

    console.log(value)

    return (
        <div className={s.checkbox}>
            <span className={value ? s.checkbox_icon_checked : s.checkbox_icon} onClick={() => onChange(name, !value)} />
            <p className={s.label}>{title}</p>
        </div>
    )
}