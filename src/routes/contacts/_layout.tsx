import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contacts/_layout')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>Hello "/contacts/_layout"!</div>
}
