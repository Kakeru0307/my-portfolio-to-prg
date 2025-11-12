import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/hiddenStory/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/hiddenStory/"!</div>
}
