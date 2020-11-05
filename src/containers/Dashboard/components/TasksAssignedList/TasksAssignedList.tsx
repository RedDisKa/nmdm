import React, { useState } from "react";
import s from "./tasksassignedlist.module.scss";
import "flag-icon-css/sass/flag-icon.scss";
import { AssignedTask } from "../../../../types";
import { Tag } from "../../../../components/Tag/Tag";

interface Props {
  items: AssignedTask[];
}

export const TasksAssignedList = ({ items }: Props) => {
  const [showMore, setShowMore] = useState(items.length > 4);

  const getTagType = (type: string) => {
    switch (type.replace(" ", "_").toLowerCase()) {
      case "created":
        return "green";
      case "updated":
        return "purple";
      case "hierarchy_updated":
        return "turquoise";
      default:
        return "blue";
    }
  };

  const getItem = (
    {
      description,
      dueDate,
      created,
      type,
      priority,
      user,
      customer,
    }: AssignedTask,
    key: number
  ) => {
    return (
      <div className={s.item} key={key}>
        <div className={s.item_header}>
          <div>
            <span
              className={s[`${priority}_priority`]}
            >{`${priority} priority`}</span>
            <img src={customer.logo} alt="" className={s.logo} />
            <p className={s.customer_name}>{customer.name}</p>
          </div>
          <div>
            <span className={s.subtitle}>Submitted</span>
            <img src={user.avatar} alt="" className={s.avatar} />
            <p className={s.user_name}>{user.name}</p>
          </div>
        </div>
        <p className={s.item_description}>{description}</p>
        <div className={s.item_footer}>
          <p className={s.date}>
            <span className={s.subtitle}>Created</span>
            {created}
          </p>
          <div>
            <span className={s.subtitle}>Task type</span>
            <Tag title={type} fill={true} type={getTagType(type)} />
          </div>
          <p className={s.date}>
            <span className={s.subtitle}>Due date</span>
            {dueDate}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className={s.list}>
      <div
        className={s.container}
        onScroll={(event: React.UIEvent<HTMLDivElement, UIEvent>) => {
          if (event.target) {
            const {
              scrollHeight,
              scrollTop,
              clientHeight,
            } = event.target as HTMLDivElement;
            setShowMore(
              items.length > 4 && scrollHeight !== scrollTop + clientHeight
            );
          }
        }}
      >
        {items.map((item, index) => getItem(item, index))}
      </div>
      {showMore && (
        <div className={s.list_more}>
          <span className={s.list_more_icon} />
        </div>
      )}
    </div>
  );
};
