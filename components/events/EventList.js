import EventItem from './EventItem';
import css from './EventList.module.css';

function EventList(props) {
    const { events } = props;

    return (
        <ul className={css.list}>
            {events && events.map(event => <EventItem key={event.id} event={event}/>)}
        </ul>
    ) 
}

export default EventList;