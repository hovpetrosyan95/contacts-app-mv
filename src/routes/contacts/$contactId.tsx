import { createFileRoute } from '@tanstack/react-router';
import { ContactPage } from '../../pages/ContactPage';

export const Route = createFileRoute('/contacts/$contactId')({
  component: ContactPage,
  loader: ({ params }) => console.log(params.contactId),
})


