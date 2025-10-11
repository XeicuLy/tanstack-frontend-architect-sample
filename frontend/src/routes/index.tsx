import { createFileRoute } from '@tanstack/react-router';
import { Index } from '@/components/index/Index';
import { prefetchHealthQuery } from '@/queries/healthQuery';

const Home = () => {
  return <Index />;
};

export const Route = createFileRoute('/')({
  loader: async ({ context }) => {
    await prefetchHealthQuery(context.queryClient);
  },
  component: Home,
});
