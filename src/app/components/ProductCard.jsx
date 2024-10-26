import styles from '../styles/ProductCard.module.css'
import Image from 'next/image';

import Img1 from '../../../public/product/1.png'
import Img2 from '../../../public/product/img.png'
import Img4 from '../../../public/product/4.png'
import Img6 from '../../../public/product/2.png'


function ProductCard() {
  return (
    <>
      <div className={styles.productCard}>
        <div className={styles.box1}>
          <div className={styles.product_header}>
            <Image src={Img1} />
          </div>
          <div className={styles.product_grid}>
            <div className={styles.product_item}>
              <Image src={Img4} />
            </div>
            <div className={styles.product_item}>
              <Image src={Img4} />
            </div>
            <div className={styles.product_item}>
              <Image src={Img4} />
            </div>
            <div className={styles.product_item}>
              <Image src={Img4} />
            </div>
          </div>
        </div>


        <div className={styles.box2}>
          <div className={styles.banner}>
            <div className={styles.banner_content}>
              <div className={styles.text_content}>
                <h4 className={styles.tag}>Корпоративные подарки</h4>
                <h2 className={styles.title}>Бизнес сувениры<br />для брендов</h2>
                <div className={styles.buttons}>
                  <button className="btn learn-more">Подробнее</button>
                  <button className="btn order">Заказать</button>
                </div>
              </div>
              <div className={styles.image_content}>
                <Image src={Img6} />
              </div>


              <div className={styles.grid}>
                <div>
                  <Image src={Img2} />
                </div>
                <div className={styles.flexBtn}>
                  <div className={styles.btnContainer}>
                    <button>1</button>
                  </div>
                  <div className={styles.btnContainer}>
                    <button>2</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.productCard2}>
        <div class={styles.main_container}>

          <div class={styles.row}>
            <div class={styles.product1}>
              <Image src={Img4} />
            </div>
            <div class={styles.grid3}>
              <div className='box1'>
                <div className={styles.product2}>
                  <Image src={Img4} />
                </div>
                <div className={styles.product3}>
                  <Image src={Img4} />
                </div>
              </div>

              <div className={styles.product7}>
                <Image src={Img4} />
              </div>
            </div>

            <div>
              <div className='box1'>
                <div className={styles.product4}>
                  <Image src={Img4} />
                </div>

                <div >
                  <div className={styles.product5}>
                    <Image src={Img4} />
                  </div>
                  <div className={styles.product6}>
                    <Image src={Img4} />
                  </div>
                </div>

              </div>

              <div className={styles.product8}>
                <Image src={Img4} />
              </div>
            </div>
          </div>

        </div>
      </div>



   
    </>
  );
}


export default ProductCard;


