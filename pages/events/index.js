import { Fragment } from 'react';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';

function AllEventsPage() {
    const events = getAllEvents();

    return (
        <Fragment>
            <EventsSearch/>
            <EventList events={events}/>
        </Fragment>
    );
}

export default AllEventsPage;