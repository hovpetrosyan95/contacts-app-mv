import { getRouteApi } from '@tanstack/react-router';

const route = getRouteApi('/contacts/');

export function Contacts() {
    const { data } = route.useLoaderData();

    return <div>{data.map((i: number) => <div>{i}</div>)}</div>
}