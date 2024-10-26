import styles from "../styles/HeroSection.module.css"
import Image from 'next/image'

import Img1 from '../../../public/img/1.png'
import Img2 from '../../../public/img/2.png'
import Img4 from '../../../public/img/4.png'
import Img6 from '../../../public/img/6.png'

function HeroSection() {
    return (
        <div className={styles.heroSection}>
            <div>
                <div className={styles.box}>
                    <Image
                        src={Img1}
                    />
                </div>
                <div className={styles.box2}>
                    <p className={styles.productCate}>Наборы</p>
                </div>
            </div>

            <div>
                <div className={styles.box}>
                    <Image
                        src={Img2}
                    />
                </div >
                <div className={styles.box2}>
                    <p className={styles.productCate}>На праздники</p>
                </div>
            </div>

            <div>
                <div className={styles.box}>
                    <Image
                        src={Img6}
                    />
                </div>
                <div className={styles.box2}>
                    <p className={styles.productCate}>Головные уборы</p>
                </div>
            </div>

            <div>
                <div className={styles.box}>
                    <Image
                        src={Img4}
                    />
                </div>
                <div className={styles.box2}>
                    <p className={styles.productCate}>Одежда</p>
                </div>
            </div>

            <div>
                <div className={styles.box}>
                    <Image
                        src={Img2}
                    />
                </div>
                <div className={styles.box2}>
                    <p className={styles.productCate}>На праздники</p>
                </div>
            </div>

            <div>
                <div className={styles.box}>
                    <Image
                        src={Img6}
                    />
                </div>
                <div className={styles.box2}>
                    <p className={styles.productCate}>Головные уборы</p>
                </div>
            </div>

            <div>
                <div className={styles.box}>
                    <Image
                        src={Img1}
                    />
                </div>
                <div className={styles.box2}>
                    <p className={styles.productCate}>Наборы</p>
                </div>
            </div>

            <div>
                <div className={styles.box}>
                    <Image
                        src={Img4}
                    />
                </div>
                <div className={styles.box2}>
                    <p className={styles.productCate}>Одежда</p>
                </div>
            </div>

            <div>
                <div className={styles.box}>
                    <Image
                        src={Img1}
                    />
                </div>
                <div className={styles.box2}>
                    <p className={styles.productCate}>Наборы</p>
                </div>
            </div>

            <div>
                <div className={styles.box}>
                    <Image
                        src={Img4}
                    />
                </div>
                <div className={styles.box2}>
                    <p className={styles.productCate}>Одежда</p>
                </div>
            </div>

            <div>
                <div className={styles.box}>
                    <Image
                        src={Img2}
                    />
                </div>
                <div className={styles.box2}>
                    <p className={styles.productCate}>На праздники</p>
                </div>
            </div>

            <div>
                <div className={styles.box}>
                    <Image
                        src={Img6}
                    />
                </div>
                <div className={styles.box2}>
                    <p className={styles.productCate}>Головные уборы</p>
                </div>
            </div>

            <div>
                <div className={styles.box}>
                    <Image
                        src={Img4}
                    />
                </div>
                <div className={styles.box2}>
                    <p className={styles.productCate}>Одежда</p>
                </div>
            </div>

            <div>
                <div className={styles.box}>
                    <Image
                        src={Img2}
                    />
                </div>
                <div className={styles.box2}>
                    <p className={styles.productCate}>На праздники</p>
                </div>
            </div>

            <div>
                <div className={styles.box}>
                    <Image
                        src={Img1}
                    />
                </div>
                <div className={styles.box2}>
                    <p className={styles.productCate}>Наборы</p>
                </div>
            </div>

        </div>
    );
}

export default HeroSection;