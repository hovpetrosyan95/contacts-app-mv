import { getRouteApi, Outlet, Link } from '@tanstack/react-router';
import {
    useQuery,
} from '@tanstack/react-query';
import SearchInput from '../../components/Search';
import { API_URL } from '../../constants';

const route = getRouteApi('/contacts');

export function Contacts() {
    const { search } = route.useSearch();
    const { data: contactsList, isError } = useQuery({
        queryKey: ['contacts', search],
        queryFn: async () => {
            const response = await fetch(`${API_URL}/contacts${search ? `?name=${search}` : ''}`);
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            return response.json();
        },
    });

    return <div className="flex h-screen bg-gray-100">
        <div className="w-64 bg-gray-700 text-white fixed inset-y-0 left-0 top-0 p-6 space-y-6">
            <div className='flex items-center'>
                <div className='w-4/5 mr-8'><SearchInput /></div>
                <div className='w-1/5'><Link to='/contacts/add'>New</Link></div>
            </div>
            {isError ? 'Oop!' :
                <ul>
                    {contactsList?.map((contact: object) =>
                        <li key={contact.id}>
                            <Link to="/contacts/$contactId" params={{ contactId: contact.id }} className="[&.active]:font-bold [&.active]:text-2xl ">{contact.name}</Link>
                        </li>)
                    }
                </ul>
            }
        </div>
        {/* Main content */}
        <div className="flex-1 ml-64 p-8 overflow-y-auto">
            <Outlet />
        </div>
    </div>
}