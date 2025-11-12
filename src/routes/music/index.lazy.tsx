import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/music/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/music/"!</div>
}
