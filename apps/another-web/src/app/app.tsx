// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { Button } from '@nx-test-no-distribution/button';

export function App() {
  return (
    <div>
      <NxWelcome title="another-web" />
      <Button />
    </div>
  );
}

export default App;
