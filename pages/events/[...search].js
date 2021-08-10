import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import EventList from '../../components/events/EventList';
import { getFilteredEvents } from '../../dummy-data';

function EventSearchPage() {
    const router = useRouter();

    if (!router.query.search) {
        return <p className='center'>Loading...</p>;
    }

    const [year, month] = router.query.search; 
    const filteredEvents = getFilteredEvents({
        year: +year,
        month: +month
    });

    return (
        <Fragment>
            { filteredEvents && filteredEvents.length > 0 ?
            <EventList events={filteredEvents}/>
            :
            <h2 className='center'>No events matched the selected filter. <Link href='/events'>Back</Link></h2>
            }
        </Fragment>
    );
}
export default EventSearchPage;