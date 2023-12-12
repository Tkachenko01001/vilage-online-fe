import Elipse from '../../assets/icons/ellipse.svg';
import BigBasket from '../../assets/icons/basket.svg';
import SmallBaskets from '../../assets/icons/basket2.svg';
import Arrow from '../../assets/icons/arrow.svg';

const Hero = () => {
    return (
        <section>
            <h1>Покупки з доставкою до вашого дому</h1>
            <p>Зекономимо Ваш час та кошти та забезпечимо доступ до усіх необхідних товарів</p>
            <button type="button">
                Спробувати безкоштовно
            <Arrow />
            </button>
            <Elipse />
            <BigBasket />
            <SmallBaskets />
        </section>
    )
};

export default Hero;