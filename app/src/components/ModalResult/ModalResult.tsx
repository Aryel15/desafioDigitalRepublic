import { meansuresPaint } from '../../utils/initialPaint'
import styles from './modalresult.module.css'
import { PiPaintBucketFill } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";

interface propsModalResult {
    paint: meansuresPaint,
    onClose: () => void
}

const ModalResult = (props: propsModalResult) => {
    const { paint, onClose } = props
    const color = ['#F6921F', '#F6861F', '#F06C22', '#F06C22']
    return (
        <section className={styles.container}>
            <div className={styles.popup}>
                <div className={styles.close}>
                    <IoMdClose onClick={onClose} className={styles.btnClose}/>
                </div>
                <h2>Indicamos</h2>
                <div className={styles.buckets}>
                    {
                        Object.keys(paint)
                        .map(key => parseFloat(key))
                        .sort((a, b) => a - b)
                        .map((prop, index: number) => 
                            <div>
                                <p style={{color: color[index], fontWeight: 'bold'}}>{prop}L</p>
                                <PiPaintBucketFill color={color[index]} size={20+(index * 5)}/>
                                <p>{paint[prop]}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default ModalResult