import React, { useEffect, useState } from 'react'
import ReactDropdown from 'react-dropdown'
import s from './dropdown.module.scss'
import Dropdown from 'react-dropdown';
import classnames from 'classnames';

interface Props {
    title: string,
    value: string,
    name: string,
    options: {value: string, label: string}[],
    onChange: (name: string, value: string) => void
}

export const DropdownComponent = ({title, value, name, options, onChange}: Props) => {

    const [focused, setFocused] = useState(false)

    useEffect(() => {
        document.addEventListener("mousedown", () => setFocused(false));
        return document.removeEventListener("mousedown", () => setFocused(false));
    })

    console.log(focused)

    return (
        <div className={s.dropdown_container} onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => setFocused(true)}>
            <label htmlFor={name} className={s.label}>{title}</label>
            <Dropdown 
                options={options}
                placeholder="Select..." 
                className={s.root}
                arrowClassName={s.select_arrow}
                controlClassName={classnames(s.dropdown, focused && s.focused)}
                menuClassName={s.options}
                placeholderClassName={s.placeholder}
                value={value} 
                onChange={({value}) => {
                    setFocused(false)
                    onChange(name, value)
                }}
            />
        </div>
    )
}
