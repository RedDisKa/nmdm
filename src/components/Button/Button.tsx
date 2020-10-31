import React from 'react'
import s from './button.module.scss'
import classnames from 'classnames'

interface Props {
    title: string,
    type: 'orange' | 'grey' | 'green' | 'blue' | 'yellow',
    onClick: () => void,
    iconOnStart?: JSX.Element,
    iconOnEnd?: JSX.Element,
    className?: string
}

export const Button = ({title, type, onClick, iconOnStart, iconOnEnd, className}: Props) => {

    return (
        <button className={classnames(s.button, s[type], iconOnStart && s.small_padding, className)} onClick={onClick}>
            {iconOnStart}
            {title}
            {iconOnEnd}
        </button>
    )
}