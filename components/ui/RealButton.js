import css from './LinkButton.module.css';

function RealButton(props) {

    return (
        <button type="submit" onClick={props.onClick} className={css.btn}>{props.children}</button>
    );
}
export default RealButton;