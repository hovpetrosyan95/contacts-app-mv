import { getRouteApi, Outlet, Link } from '@tanstack/react-router';
import {
    useQuery,
} from '@tanstack/react-query';

const route = getRouteApi('/contacts');

export function Contacts() {
    // console.log(location, 'location');
    const { data: contactsList } = useQuery({
        //      ^? const data: string | undefined
        queryKey: ['contacts'],
        queryFn: async () => {
            const response = await fetch('http://localhost:3000/contacts');
            return response.json();
        },
    });

    return <div className="flex h-screen bg-gray-100">
        Sidebar
        <div className="w-64 bg-blue-900 text-white fixed inset-y-0 left-0 top-0 p-6 space-y-6">
            <Link to='/contacts/add'>New Contact</Link>
            <ul>
                {contactsList?.map((contact: object) =>
                    <li key={contact.id}>
                        <Link to="/contacts/$contactId" params={{ contactId: contact.id }}>{contact.name}</Link>
                    </li>)
                }
            </ul>
        </div>
        {/* Main content */}
        <div className="flex-1 ml-64 p-8 overflow-y-auto">
            <Outlet />
        </div>
    </div>
}