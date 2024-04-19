import Cardlist from "../../components/Cardlist";
import CurrentCard from "../../components/CurrentCard";
import ReturnButton from "../../components/ReturnButton";
import styles from './ProductPage.module.scss';

const ProductPage = () => {

  return(
    <section className={styles.productpage_wrapper}>
      <ReturnButton />
      <CurrentCard
        className='currentcard_wrapper'
        image="https://pixy.org/src2/597/5974275.jpg"
        contentSlot='300 рублей'
        title="Рассказ о белочке"
        subtitle="Жила в старом лесу белка. У белки весной появилась дочка белочка.
        Один раз белка с белочкой собирали грибы на зиму. Вдруг на соседней ёлке появилась куница. Она приготовилась схватить белочку. Мама – белка прыгнула навстречу кунице и крикнула дочке: «Беги!»
        Белочка бросилась наутёк. Наконец она остановилась. Посмотрела по сторонам, а места незнакомые! Мамы – белки нет. Что делать?
        Увидела белочка дупло на сосне, спряталась и заснула. А утром мама дочку нашла."/>
      <Cardlist />
    </section>
  );
}

export default ProductPage;