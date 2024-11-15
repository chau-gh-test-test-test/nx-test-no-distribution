// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { Tooltip } from '@nx-test-no-distribution/tooltip';

export function App() {
  return (
    <div>
      <NxWelcome title="nx-test-no-distribution" />
      <Tooltip />
    </div>
  );
}

export default App;
