import { useMemo } from 'react';
import { useHealthQuery } from '@/queries/healthQuery';

/**
 * ヘルスチェックデータアダプター
 * APIレスポンスをUI用に変換
 */
export const useHealthAdapter = () => {
  const { healthQuery } = useHealthQuery();
  const { isLoading, data: healthData, error: healthError, refetch } = healthQuery;

  const healthStatusData = useMemo(
    () => ({
      healthStatus: healthData.status,
      healthTimestamp: healthData.timestamp,
    }),
    [healthData.status, healthData.timestamp],
  );

  const errorCode = useMemo(() => healthError?.data.errorCode, [healthError]);

  return { isLoading, healthStatusData, healthError, errorCode, refetch };
};
