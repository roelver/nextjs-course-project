import { useRouter } from 'next/router';

function EventDetailPage() {
    const router = useRouter();
    const eventId = router.query.id; 
    return (
        <div>
            <h1>Event details for {eventId}</h1>
        </div>
    );
}
export default EventDetailPage;