import React from 'react'
import s from './dropdown.module.scss'
import Dropdown from 'react-dropdown';

interface Props {
    title: string,
    value: string | undefined,
    name: string,
    options: {value: string, label: string}[],
    onChange: (name: string, value: string) => void
}

export const DropdownComponent = ({title, value, name, options, onChange}: Props) => {

    return (
        <div className={s.dropdown_container}>
            <label htmlFor={name} className={s.label}>{title}</label>
            <Dropdown 
                options={options.map(option => ({value: `${option.value}`, label: option.label}))}
                placeholder="Select..." 
                className={s.root}
                arrowClassName={s.select_arrow}
                controlClassName={s.dropdown}
                menuClassName={s.options}
                placeholderClassName={s.placeholder}
                value={!!value ? `${value}` : ''} 
                onChange={({value}) => {
                    onChange(name, value)
                }}
            />
        </div>
    )
}
