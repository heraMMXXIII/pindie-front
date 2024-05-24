import Styles from "./Card.module.css";
import { CardsSlider } from "./CardsSlider.jsx";
import { CardsList } from "./Cardslist.jsx";

export const CardsListSection = (props) => {
  return (
    <section className={Styles["list_section"]}>
      <h2 className={Styles["list_section__title"]} id={props.id}>
        {props.title}
      </h2>
      {props.type === "slider" ? (
        <CardsSlider data={props.data} />
      ) : (
        <CardsList data={props.data} />
      )}
    </section>
  );
};
