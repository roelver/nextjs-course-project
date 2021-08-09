import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
import EventItem from '../../components/events/EventItem';
import css from './EventDetails.module.css';

function EventDetailPage() {
    const router = useRouter();
    const eventId = router.query.id; 

    const event = getEventById(eventId);

    if (!event) {
        return <p>No event found</p>;
    }

    return (
        <div>
            <h1>Event details</h1>
            <div className={css.detail}> 
                <EventItem event={event} detail/>
            </div>
         </div>
    );
}
export default EventDetailPage;