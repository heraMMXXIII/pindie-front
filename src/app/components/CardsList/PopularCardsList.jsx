import Styles from "./Card.module.css";
import { PopularCardsFragment } from "./PopularCardsFragment";
export const PopularCardsList = () => {
  return (
    <section className={Styles.list_section}>
      <h2 className={Styles.list_section__title} id="popular">
        Популярное
      </h2>
      <ul className={Styles.cards_list}>
        <PopularCardsFragment />
      </ul>
    </section>
  );
};
