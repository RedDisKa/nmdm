import React, { useEffect, useRef, useState } from "react";
import s from "./dropdownbutton.module.scss";
import classnames from "classnames";

interface Action {
  id: string;
  onClick?: Function;
  title: string;
  iconStyle: string;
}

interface Props {
  actions: Action[];
  defaultAction: Action;
  color: "orange" | "blue";
  dropToNull: boolean;
}

export const DropdownButton = ({
  actions,
  defaultAction,
  color,
  dropToNull,
}: Props) => {
  const [showSelector, setShowSelector] = useState(false);
  const [currentAction, setCurrentAction] = useState(defaultAction);

  const ref = useRef(null)

  useEffect(() => {
    const handler = (ev: any) => {
        if (ev.target !== ref.current && ev.target.parentNode !== ref.current) setShowSelector(false)
    };
    window.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const getAction = (action: Action) => (
    <button
      key={action.id}
      className={classnames(s.action_item, s[color])}
      onClick={() => {
        action.onClick && action.onClick();
        if (!dropToNull) setCurrentAction(action);
        setShowSelector(false);
      }}
    >
      <span className={classnames(action.iconStyle, s.button_icon)} />
      {action.title}
    </button>
  );

  return (
    <div className={s.container}>
      <button
        ref={ref}
        className={classnames(s.new_button, s[color])}
        onClick={() => setShowSelector(!showSelector)}
      >
        <span className={classnames(currentAction.iconStyle, s.button_icon)} />
        <span className={s.new_button_extend_icon} />
        {currentAction.title}
      </button>
      {showSelector && (
        <div className={s.action_selector}>
          {actions.map((action) => getAction(action))}
        </div>
      )}
    </div>
  );
};
