import { getRouteApi, Outlet, Link } from '@tanstack/react-router';

const route = getRouteApi('/contacts');

export function Contacts() {
    const { data } = route.useLoaderData();

    return <div className="flex h-screen bg-gray-100">
        Sidebar
        <div className="w-64 bg-blue-900 text-white fixed inset-y-0 left-0 top-0 p-6 space-y-6">
            <Link to='/contacts/add'>New Contact</Link>
            {data.map((i: number) => <div>{i}</div>)}
        </div>
        {/* Main content */}
        <div className="flex-1 ml-64 p-8 overflow-y-auto">
            <Outlet />
        </div>
    </div>
}