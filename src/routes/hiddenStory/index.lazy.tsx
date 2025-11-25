import { createLazyFileRoute } from '@tanstack/react-router';

function HiddenStory() {
  return (
    <div className="flex flex-col">
      <h1 className="text-center">このページはまだ解放されていないようだ...</h1>
    </div>
  );
}

export const Route = createLazyFileRoute('/hiddenStory/')({
  component: HiddenStory,
});
