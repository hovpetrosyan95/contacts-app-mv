import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contacts/$contactId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/contacts/contactId"!</div>
}
