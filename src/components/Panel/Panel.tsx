import React from 'react'
import s from './panel.module.scss'
import classnames from 'classnames'

interface Props {
    children?: any,
    classNames?: string
}

export const Panel = ({children, classNames}: Props) => {
    return (
        <div className={classnames(s.panel, classNames)}>
            {children}
        </div>
    )
}
