import { createFileRoute } from '@tanstack/react-router'
import { Contacts } from '../../pages/Contacts'

export const Route = createFileRoute('/contacts')({
    component: Contacts,
    loader: () => ({ data: [1, 2, 3] }),
})
