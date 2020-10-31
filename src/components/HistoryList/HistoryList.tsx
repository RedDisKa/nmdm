import React from 'react'
import { HistoryItem } from '../../types'
import s from './historylist.module.scss'

interface Props {
    list: HistoryItem[],
    showCurrentView: boolean
}

export const HistoryList = ({list, showCurrentView}: Props) => {

    return (
        <div className={s.history_list}>
            {showCurrentView && (
                <div className={s.history_list_current_view}>
                    <p className={s.history_list_current_view_title}>Current View</p>
                    <span className={s.history_list_current_view_icon} />
                </div>
            )}
            <div className={s.items_container}>
                {list.map((item, index) => (
                    <div className={s.history_list_item} key={index}>
                        <span className={s[`${item.action}_icon`]} />
                        <img src={item.userAvatar} className={s.history_list_item_avatar} alt='' />
                        <div>
                            <p className={s.history_list_item_name}>{item.userName}</p>
                            <p className={s.history_list_item_time}><span className={s.history_list_item_action}>{item.action}</span>{` | ${item.actionTime}`}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}