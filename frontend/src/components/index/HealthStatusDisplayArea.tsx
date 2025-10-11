import type { JSX } from 'react';

interface HealthStatusDisplayAreaProps {
  healthStatus: string;
  healthTimestamp: string;
}

export const HealthStatusDisplayArea = ({
  healthStatus,
  healthTimestamp,
}: HealthStatusDisplayAreaProps): JSX.Element => {
  return (
    <ul>
      <li data-testid="status-display-area">status: {healthStatus}</li>
      <li data-testid="timestamp-display-area">timestamp: {healthTimestamp}</li>
    </ul>
  );
};
