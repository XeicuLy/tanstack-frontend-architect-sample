import consola from 'consola';
import { ofetch } from 'ofetch';
import { type GetApiHealthResponse, zGetApiHealthResponse } from '#shared/types/api';
import type { HealthErrorDetail } from '@/types/error';

export const getHealthApi = async (): Promise<GetApiHealthResponse> => {
  try {
    const response = await ofetch<GetApiHealthResponse>('/api/health', {
      method: 'GET',
      timeout: 5_000,
      baseURL: process.env.API_BASE_URL,
    });
    return zGetApiHealthResponse.parse(response);
  } catch (error: unknown) {
    const healthError = error as HealthErrorDetail;
    consola.error('Error fetching health API:', healthError.message);
    consola.error('Error code:', healthError.data.errorCode);
    throw healthError;
  }
};
