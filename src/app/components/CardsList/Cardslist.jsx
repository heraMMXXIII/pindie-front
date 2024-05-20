import Link from "next/link";
import { Card } from "../Card/Card";
import Styles from "./Card.module.css";

export const CardsList = (props) => {
  return (
    <ul className={Styles["cards_list"]}>
      {props.data.map((item) => {
        return (
          <li className={Styles["cards_list__item"]} key={item.id}>
            <Link href={`/games/${item.id}`} className={Styles["card_list__link"]}>
              <Card
                {...item}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}; 