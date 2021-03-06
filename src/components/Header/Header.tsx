import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ROUTE } from '../../constants/routes'
import s from './header.module.scss'
import { Search } from './Search'
import classnames from 'classnames'
import avatar from '../../resources/testimages/avatar.png'
import { DropdownButton } from 'components/DropdownButton/DropdownButton'

export const Header = () => {

    const history = useHistory();

    const NEW_ACTIONS = [
        {id: 'new_customer', onClick: () => history.push(ROUTE.createcustomer()), title: 'New Customer', iconStyle: s.new_button_add_icon },
        {id: 'new_task', onClick: () => {}, title: 'New Task', iconStyle: s.new_button_add_icon },
        {id: 'new_hierarchy', onClick: () => {}, title: 'New Hierarchy', iconStyle: s.new_button_add_icon }
    ]

    const [newEvents, ] = useState(false as boolean)
    const [user, ] = useState({image: avatar})

    const getMenuButton = (title: string, route: string, icon: string, activeIcon: string) => {
        const active = history.location.pathname.startsWith('/' + route.split('/')[1])

        return (
            <button
                className={active ? classnames(s.button, s.active) : s.button}
                onClick={() => history.push(route)}
            >
                <span className={active ? activeIcon : icon} />
                {title}
            </button>
        )
    }

    return (<React.Fragment>
        <div className={s.header}>
            <span className={s.main_icon} />
            <Search />
            <div className={s.user_container}>
                <span className={newEvents ? s.notifications_icon_new : s.notifications_icon}/>
                <img className={s.avatar} src={user.image} alt=''/>
            </div>
        </div>
        <div className={s.menu}>
            <div className={s.menu_buttons}>
                {getMenuButton('Dashboard', ROUTE.dashboard(), s.dashboard_icon, s.dashboard_icon_active)}
                {getMenuButton('Customers Feed', ROUTE.customerfeed(), s.customer_feed_icon, s.customer_feed_icon_active)}
                {getMenuButton('Customers Details', ROUTE.customerdetails(), s.customer_details_icon, s.customer_details_icon_active)}
                {getMenuButton('Task Manager', ROUTE.taskmanager(), s.task_manager_icon, s.task_manager_icon_active)}
                {getMenuButton('Hierarchy', ROUTE.hierarchymanagement(), s.hierarchy_management_icon, s.hierarchy_management_icon_active)}
            </div>
            <DropdownButton actions={NEW_ACTIONS} color='orange' defaultAction={{title: 'New', iconStyle: s.new_button_add_icon, id: 'new'}} dropToNull={true} />
        </div>
    </React.Fragment>)
}