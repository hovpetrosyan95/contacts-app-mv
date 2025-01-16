import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contacts/add')({
    component: AddContact,
})

function AddContact() {
    return <div>Hello "/contacts/add"!</div>
}
