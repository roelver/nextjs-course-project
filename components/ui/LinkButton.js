import Link from 'next/link';
import css from './LinkButton.module.css';

function LinkButton(props) {

    const link = props.link ? props.link : '/';

    return (
        <Link href={link}>
            <a className={css.btn}>{props.children}</a>
        </Link>
    );
}
export default LinkButton;