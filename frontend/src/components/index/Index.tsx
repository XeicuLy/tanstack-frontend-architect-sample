import { useHealth } from '@/hooks/useHealth';
import { HealthStatusDisplayArea } from './HealthStatusDisplayArea';
import { Title } from './Title';

export const Index = () => {
  const greetingMessage = 'Hello TanStack App!';
  const { healthStatusData } = useHealth();

  return (
    <>
      <Title title={greetingMessage} />
      <HealthStatusDisplayArea {...healthStatusData} />
    </>
  );
};
