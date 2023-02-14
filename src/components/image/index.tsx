import { ImageOptions } from '../../types/component';
import classes from './styles.module.css';

type Props = ImageOptions;

const Image = ({ src, alt }: Props) => {
    return (
        <div className={`${classes.container} ${classes.card}`}>
            <img className={classes.image} src={src} alt={alt} />
        </div>
    );
};

export default Image;
