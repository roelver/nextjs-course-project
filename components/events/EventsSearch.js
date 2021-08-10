import { useRef } from 'react';
import { useRouter } from 'next/router';
import RealButton from '../ui/RealButton';
import css from './EventsSearch.module.css';

function EventsSearch(props) {

    const router = useRouter();
    const yearRef = useRef();
    const monthRef = useRef();

    function handleSearch(evt) {
        evt.preventDefault();
        router.replace(`/events/${yearRef.current.value}/${monthRef.current.value}`);
    }

    return (
        <form className={css.form} onSubmit={handleSearch}>
            <div className={css.controls}>
                <div className={css.control}>
                    <label htmlFor="year">Year</label>
                    <select id="year" ref={yearRef}>
                        <option value="2021" defaultValue>2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={css.control}>
                    <label htmlFor="month">Month</label>
                    <select id="month" ref={monthRef}>
                        <option value="1" defaultValue>January</option>
                        <option value="2" defaultValue>February</option>
                        <option value="3" defaultValue>March</option>
                        <option value="4" defaultValue>April</option>
                        <option value="5" defaultValue>May</option>
                        <option value="6" defaultValue>June</option>
                        <option value="7" defaultValue>July</option>
                        <option value="8" defaultValue>August</option>
                        <option value="9" defaultValue>September</option>
                        <option value="10" defaultValue>October</option>
                        <option value="11" defaultValue>November</option>
                        <option value="12" defaultValue>December</option>
                    </select>
                </div>
                <div>
                    <RealButton onClick={handleSearch}>Find events</RealButton>
                </div>
            </div>
        </form>
    );
}

export default EventsSearch;