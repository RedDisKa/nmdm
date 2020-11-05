import React from 'react'
import s from './tag.module.scss'
import classnames from 'classnames'

interface Props {
    title: string,
    type: 'blue' | 'purple' | 'green' | 'turquoise', // | 'orange' | 'grey' | 'green' | 'yellow',
    paintedOver?: boolean,
    fill?: boolean,
    onDelete?: (title: string) => void
}

export const Tag = ({title, type, paintedOver, fill, onDelete}: Props) => {

    return (
        <div className={classnames(s.tag, s[type], paintedOver && s.painted_over, !fill && s.not_filled)}>
            {title}
            {onDelete && <span className={s.delete_icon} />}
        </div>
    )
}