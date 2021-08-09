import LinkButton from '../ui/LinkButton';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import css from './EventItem.module.css';

function EventItem(props) {

    const {event} = props;

    const displayDate = new Date(event.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const formattedAddress = event.location.replace(', ','\n');

    return (
        <li className={css.item}>
            <img src={'/' + event.image} alt={event.title}/>
            <div className={css.content}>
                <div className={css.summary}>
                   <h3>{event.title}</h3>
                   <div className={css.date}>
                       <DateIcon/>
                       <time>{displayDate}</time>
                   </div>
                   <div className={css.address}>
                       <AddressIcon/>
                       <address>{formattedAddress}</address>
                   </div>
                </div>
                <div className={css.actions}>
                    <LinkButton 
                        label='Explore event' 
                        link={`/events/${event.id}`}
                    ><span>Explore event</span>
                    <span className={css.icon}><ArrowRightIcon/></span>
                    </LinkButton>
                </div>
            </div>
        </li>
    )
}

export default EventItem;