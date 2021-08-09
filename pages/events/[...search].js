import { useRouter } from 'next/router';

function EventSearchPage() {
    const router = useRouter();
    const terms = router.query.search; 
    return (
        <div>
            <h1>Search event results</h1>
            <ul>
                { terms && terms.map(term => <li key={term}>{term}</li>)}
            </ul>
        </div>
    );
}
export default EventSearchPage;