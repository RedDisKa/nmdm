import React, { useState } from "react";
import s from "./list.module.scss";

interface ListTitleProps {
  title: string, 
  actions?: []
}

interface Props extends ListTitleProps {
  showTotal: boolean;
  list: { name: string; description?: string; image: string }[];
  maxVisibleItems: number;
  info?: JSX.Element,
  itemSize?: 'small' | 'medium' | 'large'
}

const ITEM_HEIGHT = {
  small: 45,
  medium: 54,
  large: 70
};

export const ListTitle = ({title, actions}: ListTitleProps) => {
  return (
    <div className={s.list_title_container}>
        <p className={s.list_title}>{title}</p>
        {actions && <span className={s.actions_icon} />}
      </div>
  )
}

export const ListComponent = ({
  title,
  showTotal,
  list,
  maxVisibleItems,
  actions,
  info,
  itemSize='small'
}: Props) => {

  const [showMore, setShowMore] = useState(maxVisibleItems < list.length)

  const maxHeight = maxVisibleItems * ITEM_HEIGHT[itemSize] + 70 + (showTotal ? 36 : 0)

  return (
    <div className={s.list} style={{maxHeight: maxHeight}}>
      <ListTitle title={title} actions={actions} />
      {showTotal && (
          <div className={s.list_total}>
            <p className={s.list_total_title}>Total</p>
            <p className={s.list_total_value}>{list.length}</p>
          </div>
        )}
      <div className={s.root} onScroll={(event: React.UIEvent<HTMLDivElement, UIEvent>) => {
        if (event.target) {
          const {scrollHeight, scrollTop, clientHeight} = (event.target as HTMLDivElement)
          setShowMore(maxVisibleItems < list.length && scrollHeight !== scrollTop + clientHeight)
        }
      }}>
        {list.map(({name, image, description}, index) => (
          <div
            key={index}
            className={s[`list_item_${itemSize}`]}
          >
            <div className={s.item_content}>
              <img src={image} className={s[`logo_image_${itemSize}`]} />
              <div className={s.item_info}>
                <p className={s.list_item_name}>{name}</p>
                {description && (
                  <p className={s.list_item_description}>{description}</p>
                )}
              </div>
            </div>
            {info && <span className={s.info_icon} />}
          </div>
        ))}
      </div>
      {showMore && (
        <div className={s.list_more}>
          <span className={s.list_more_icon} />
        </div>
      )}
    </div>
  );
};
