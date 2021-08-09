import Link from 'next/link';

function EventItem(props) {
    const {event} = props; 
    const displayDate = new Date(event.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const formattedAddress = event.location.replace(', ','\n');

    return (
        <li>
            <img src={'/' + event.image} alt={event.title}/>
            <div>
                <div>
                   <h3>{event.title}</h3>
                   <div>
                       <time>{displayDate}</time>
                   </div>
                   <div>
                       <address>{formattedAddress}</address>
                   </div>
                </div>
                <div><Link href={`/events/${event.id}`}>Explore event</Link></div>
            </div>
        </li>
    )
}

export default EventItem;