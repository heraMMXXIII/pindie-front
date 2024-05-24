import Styles from './Card.module.css'
import { NewCardsListFragment } from './NewCardsListFragment'
export const NewCardsList = () => {
    return (
        <section className={Styles.list_section}>
            <h2 className={Styles.list_section__title} id="new">
                Новинки
            </h2>
            <ul className={Styles.cards_list}>
                <NewCardsListFragment />
            </ul>
        </section>
    )
}