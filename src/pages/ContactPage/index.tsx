import { getRouteApi } from '@tanstack/react-router';

const route = getRouteApi('/contacts/$contactId');

export function ContactPage() {
    const { contactId } = route.useParams();
    return <div>Hello `/contacts/${contactId}`!</div>
}