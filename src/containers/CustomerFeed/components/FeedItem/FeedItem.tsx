import React from 'react'
import { Tag } from '../../../../components/Tag/Tag';
import { Feed } from '../../../../types';
import s from "./feeditem.module.scss";
import Moment from 'react-moment';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';

interface Props {
    feed: Feed,
    setMarked: (feed: Feed) => void
}

export const FeedItem = ({feed, setMarked}: Props) => {

    const {title, content, tags, marked, source, sourceType, postedAt, image} = feed

    const getSourceTypeDescription = () => {
        switch (sourceType) {
            case "facebook": return 'in Facebook'
            case "twitter": return 'in Twitter'
            default: return ''
        }
    }

    const diffFromNow = moment().diff(moment(postedAt))

    const highlightedText = content.replaceAll(source, `<span class=${s.highlighted}>${source}</span>`)

    return (
        <div className={s.item_container}>
            <span className={marked ? s.bookmark_marked : s.bookmark} onClick={() => setMarked(feed)}/>
            <div className={s.item_header}>
                <div className={s.header_images}>
                    <img src={image} alt="" className={s.item_image}/>
                    {sourceType !== "" && <span className={s[sourceType]}/>}
                </div>
                <div className={s.header_content}>
                    <p className={s.item_title}>{title}</p>
                    <p className={s.item_source_title}>
                        {sourceType !== "" && <span className={s.source_type_description}>{getSourceTypeDescription()}</span>}
                        {source}
                    </p>
                </div>
                <div className={s.header_posted_at}>
                    {diffFromNow < 86400000 ? <Moment fromNow ago>{postedAt}</Moment> : <Moment format={'MMM DD'}>{postedAt}</Moment>}
                </div>
            </div>
            <p className={s.item_content}>{ReactHtmlParser(highlightedText)}</p>
            <div className={s.item_tags_container}>
                {tags.map((tag, index) => (
                    <Tag key={index} title={tag.title} type={tag.color} />
                ))}
            </div>
        </div>
    )
}