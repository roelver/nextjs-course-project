import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/EventList';

function HomePage() {
    const events = getFeaturedEvents();

    return (
        <div>
            <h3>Featured events</h3>
            <EventList events={events}/>
        </div>
    );
}
export default HomePage;