import { createFileRoute } from '@tanstack/react-router';
import { AddContact } from '../../pages/AddContact';

export const Route = createFileRoute('/contacts/add')({
    component: AddContact,
});
