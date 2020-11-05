import React, { useState } from "react";
import s from "./frequentlyusedtable.module.scss";
import "flag-icon-css/sass/flag-icon.scss";
import classnames from "classnames";

interface Props {
  items: {
    country: string;
    companies: string;
    countryCode: string;
  }[];
}

export const FrequentlyUsedTable = ({ items }: Props) => {
  const [showMore, setShowMore] = useState(items.length > 8);

  return (
    <div className={s.table_container}>
      <table className={s.table}>
        <tr className={s.header}>
          <th>Country</th>
          <th>Companies</th>
        </tr>
      </table>
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
              items.length > 8 && scrollHeight !== scrollTop + clientHeight
            );
          }
        }}
      >
        <table className={s.table}>
          <tbody className={s.body}>
            {items.map(({ country, companies, countryCode }, index) => (
              <tr className={s.row} key={index}>
                <td>
                  <span
                    className={classnames(
                      s.icon,
                      `flag-icon flag-icon-${countryCode}`
                    )}
                  />
                  {country}
                </td>
                <td>
                  <div>{companies}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showMore && (
        <div className={s.list_more}>
          <span className={s.list_more_icon} />
        </div>
      )}
    </div>
  );
};
