import { type QueryClient, queryOptions, useSuspenseQuery } from '@tanstack/react-query';
import type { GetApiHealthResponse } from '#shared/types/api';
import { getHealthApi } from '@/services/health';
import type { HealthErrorDetail } from '@/types/error';

export const healthQueryOptions = queryOptions<GetApiHealthResponse, HealthErrorDetail>({
  queryKey: ['health'] as const,
  queryFn: getHealthApi,
  staleTime: 1000 * 60 * 5,
});

export const useHealthQuery = () => {
  const healthQuery = useSuspenseQuery(healthQueryOptions);
  return { healthQuery };
};

export const prefetchHealthQuery = (queryClient: QueryClient) => {
  return queryClient.ensureQueryData(healthQueryOptions);
};
