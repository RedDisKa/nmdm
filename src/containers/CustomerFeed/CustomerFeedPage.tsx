import React, { useState } from 'react'
import Collapsible from 'react-collapsible';
import { Panel } from '../../components/Panel/Panel';
import { Tag } from '../../components/Tag/Tag';
import { TextField } from '../../components/TextField/TextField';
import { Feed } from '../../types';
import { FeedItem } from './components/FeedItem/FeedItem';
import s from "./customerfeedpage.module.scss";
import './collapsible.scss'
import './calendar.scss'
import { ListTitle, ListComponent } from '../../components/List/List';
import { Button } from '../../components/Button/Button';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

const TEST_DATA = {
    feeds: [
        {
            content: 'Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Suspendisse fermentum sem sagittis ante venenatis egestas quis vel justo. Maecenas semper suscipit nunc, sed aliquam @apple convallis eu.',
            title: 'IBM',
            marked: false,
            source: '@apple',
            sourceType: 'facebook',
            tags: [
                { color: 'purple', title: 'Technology'},
                { color: 'blue', title: 'Finance'}
            ],
            postedAt: '2020-10-28T12:59-0500',
            image: 'https://pbs.twimg.com/profile_images/1276481413127299072/F_itR06f_400x400.png'
        },
        {
            content: 'Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Suspendisse fermentum sem sagittis ante venenatis egestas quis vel justo. Maecenas semper suscipit nunc, sed aliquam @apple convallis eu.',
            title: 'IBM',
            marked: true,
            source: '@apple',
            sourceType: 'twitter',
            tags: [
                { color: 'purple', title: 'Technology'},
                { color: 'blue', title: 'Finance'}
            ],
            postedAt: '2020-04-19T12:59-0500',
            image: 'https://pbs.twimg.com/profile_images/1276481413127299072/F_itR06f_400x400.png'
        },
        {
            content: 'Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Suspendisse fermentum sem sagittis ante venenatis egestas quis vel justo. Maecenas semper suscipit nunc, sed aliquam @apple convallis eu.',
            title: 'IBM',
            marked: true,
            source: '@apple',
            sourceType: 'twitter',
            tags: [
                { color: 'purple', title: 'Technology'},
                { color: 'blue', title: 'Finance'}
            ],
            postedAt: '2020-04-19T12:59-0500',
            image: 'https://pbs.twimg.com/profile_images/1276481413127299072/F_itR06f_400x400.png'
        },
        {
            content: 'Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Suspendisse fermentum sem sagittis ante venenatis egestas quis vel justo. Maecenas semper suscipit nunc, sed aliquam @apple convallis eu.',
            title: 'IBM',
            marked: true,
            source: '@apple',
            sourceType: 'twitter',
            tags: [
                { color: 'purple', title: 'Technology'},
                { color: 'blue', title: 'Finance'}
            ],
            postedAt: '2020-04-19T12:59-0500',
            image: 'https://pbs.twimg.com/profile_images/1276481413127299072/F_itR06f_400x400.png'
        },
        {
            content: 'Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Suspendisse fermentum sem sagittis ante venenatis egestas quis vel justo. Maecenas semper suscipit nunc, sed aliquam @apple convallis eu.',
            title: 'IBM',
            marked: true,
            source: '@apple',
            sourceType: 'twitter',
            tags: [
                { color: 'purple', title: 'Technology'},
                { color: 'blue', title: 'Finance'}
            ],
            postedAt: '2020-04-19T12:59-0500',
            image: 'https://pbs.twimg.com/profile_images/1276481413127299072/F_itR06f_400x400.png'
        },
        {
            content: 'Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Suspendisse fermentum sem sagittis ante venenatis egestas quis vel justo. Maecenas semper suscipit nunc, sed aliquam @apple convallis eu.',
            title: 'IBM',
            marked: true,
            source: '@apple',
            sourceType: 'twitter',
            tags: [
                { color: 'purple', title: 'Technology'},
                { color: 'blue', title: 'Finance'}
            ],
            postedAt: '2020-04-19T12:59-0500',
            image: 'https://pbs.twimg.com/profile_images/1276481413127299072/F_itR06f_400x400.png'
        },
        {
            content: 'Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Suspendisse fermentum sem sagittis ante venenatis egestas quis vel justo. Maecenas semper suscipit nunc, sed aliquam @apple convallis eu.',
            title: 'IBM',
            marked: true,
            source: '@apple',
            sourceType: 'twitter',
            tags: [
                { color: 'purple', title: 'Technology'},
                { color: 'blue', title: 'Finance'}
            ],
            postedAt: '2020-04-19T12:59-0500',
            image: 'https://pbs.twimg.com/profile_images/1276481413127299072/F_itR06f_400x400.png'
        },
        {
            content: 'Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Suspendisse fermentum sem sagittis ante venenatis egestas quis vel justo. Maecenas semper suscipit nunc, sed aliquam @apple convallis eu.',
            title: 'IBM',
            marked: true,
            source: '@apple',
            sourceType: 'twitter',
            tags: [
                { color: 'purple', title: 'Technology'},
                { color: 'blue', title: 'Finance'}
            ],
            postedAt: '2020-04-19T12:59-0500',
            image: 'https://pbs.twimg.com/profile_images/1276481413127299072/F_itR06f_400x400.png'
        },
        {
            content: 'Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Suspendisse fermentum sem sagittis ante venenatis egestas quis vel justo. Maecenas semper suscipit nunc, sed aliquam @apple convallis eu.',
            title: 'IBM',
            marked: true,
            source: '@apple',
            sourceType: 'twitter',
            tags: [
                { color: 'purple', title: 'Technology'},
                { color: 'blue', title: 'Finance'}
            ],
            postedAt: '2020-04-19T12:59-0500',
            image: 'https://pbs.twimg.com/profile_images/1276481413127299072/F_itR06f_400x400.png'
        }
    ],
    recents: [
        {name: 'IBM', image: 'https://pbs.twimg.com/profile_images/1276481413127299072/F_itR06f_400x400.png'},
        {name: 'Microsoft', image: 'https://pbs.twimg.com/profile_images/1276481413127299072/F_itR06f_400x400.png'},
        {name: 'Google', image: 'https://pbs.twimg.com/profile_images/1276481413127299072/F_itR06f_400x400.png'},
        {name: 'Dell', image: 'https://pbs.twimg.com/profile_images/1276481413127299072/F_itR06f_400x400.png'},
        {name: 'Apple', image: 'https://pbs.twimg.com/profile_images/1276481413127299072/F_itR06f_400x400.png'},
        {name: 'Oracle', image: 'https://pbs.twimg.com/profile_images/1276481413127299072/F_itR06f_400x400.png'}
    ],
    customer: {
        name: 'Apple Inc.',
        companyMarket: 'Consumer Electronics',
        description: 'Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. ',
        ceo: 'Tim Cook',
        headquarters: 'Cupertino, California, USA',
        employees: '‎100,001+',
        revenue: '‎US$260.174 billion',
        locations: '‎511 retail stores',
        website: 'http://www.apple.com',
        netIncome: 'US$55.256 billion',
        image: 'https://pbs.twimg.com/profile_images/1276481413127299072/F_itR06f_400x400.png',
        active: true
    }
} as {feeds: Feed[], recents: {name: string, image: string}[], customer: any}

export const CustomerFeedPage = () => {

    const setMarked = (feed: Feed) => {
        console.log('set marked')
    }

    const [hashtagsFilter, setHashtagsFilter] = useState([] as string[])
    const [hashtagFilterValue, setHashtagFilterValue] = useState('')

    const onDeleteHashtagFromFilter = (tag: string) => {
        const newFilter = hashtagsFilter.splice(0)
        const index = newFilter.findIndex(filter => tag === filter)
        if (index >= 0) {
            newFilter.splice(index, 1)
        }
        setHashtagsFilter(newFilter)
    }

    const getFilterSubheader = (title: string) => (
        <React.Fragment>
            <p>{title}</p>
            <span className={s.arrow_icon}/>
        </React.Fragment>
    )

    const getMainPartInfo = (title: string, field: string) => (
        <p className={s.main_info_title}>{title}<span className={s.main_info_value}>{TEST_DATA.customer[field]}</span></p>
    )

    return (
        <div className={s.container}>
            <div>
                <Panel>
                    <div className={s.main_header}>
                        <div className={s.main_image_container}>
                            <img src={TEST_DATA.customer.image} alt='' />
                            {TEST_DATA.customer.active && <span />}
                        </div>
                        <div className={s.main_title_container}>
                            <p className={s.main_title}>{TEST_DATA.customer.name}</p>
                            <Tag title={TEST_DATA.customer.companyMarket} type='blue' fill={true} />
                        </div>
                    </div>
                    <p className={s.main_description}>{TEST_DATA.customer.description}</p>
                    <div className={s.main_part}>
                        {getMainPartInfo('CEO: ', 'ceo')}
                        {getMainPartInfo('Headquarters: ', 'headquarters')}
                    </div>
                    <div className={s.main_part}>
                        {getMainPartInfo('Employees: ', 'employees')}
                        {getMainPartInfo('Revenue: ', 'revenue')}
                        {getMainPartInfo('Locations: ', 'locations')}
                        {getMainPartInfo('Net income‎: ', 'netIncome')}
                    </div>
                    <div className={s.main_part}>
                        {getMainPartInfo('Website: ', 'website')}
                    </div>
                    <Button title='Bookmarks' type='yellow' onClick={() => {}} iconOnStart={<span className={s.bookmark_button_icon}/>} className={s.main_button}/>
                </Panel>
                <Panel>
                    <ListComponent title='Recents' showTotal={false} list={TEST_DATA.recents} maxVisibleItems={5} itemSize={'large'} />
                </Panel>
            </div>
            <div>
                <Panel classNames={s.stretched}>
                    <ListTitle title='News Feed' actions={[]}/>
                    {TEST_DATA.feeds.map((feed, index) => (<FeedItem key={index} feed={feed} setMarked={setMarked} />))}
                </Panel>
            </div>
            <div>
                <Panel>
                    <ListTitle title='Filters' />
                    <Collapsible trigger={getFilterSubheader("BY DATE")} >
                        <div className={s.filter}>
                            <TextField onChange={() => {}} value='' />
                            <Calendar
                                onChange={(dates) => {console.log(dates)}}
                                selectRange={true}
                            />
                        </div>
                    </Collapsible>
                    <Collapsible trigger={getFilterSubheader("BY HASHTAG")} >
                        <div className={s.filter}>
                            <TextField value={hashtagFilterValue} onChange={(value: string) => setHashtagFilterValue(value)} />
                            <div>
                                {hashtagsFilter.map((hashtag, index) => (
                                    <Tag title={hashtag} key={index} type={'blue'} onDelete={onDeleteHashtagFromFilter} />
                                ))}
                            </div>
                        </div>
                    </Collapsible>
                    <Collapsible trigger={getFilterSubheader("BY WORDS")} >
                        <div className={s.filter}></div>
                    </Collapsible>
                    <Collapsible trigger={getFilterSubheader("BY COMPANY")} >
                        <div className={s.filter}></div>
                    </Collapsible>
                    <Collapsible trigger={getFilterSubheader("By Company Size")} >
                        <div className={s.filter}></div>
                    </Collapsible>
                    <Collapsible trigger={getFilterSubheader("By Industry")} >
                        <div className={s.filter}></div>
                    </Collapsible>
                </Panel>
            </div>
        </div>
    )
}