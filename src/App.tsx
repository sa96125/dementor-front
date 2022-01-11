import { useReactiveVar } from '@apollo/client';
import { LoggedInRouter } from './client/routers/logged-in-router';
import { LoggedOutRouter } from './client/routers/logged-out-router';
import { isLoggedInVar } from './service/plugins/apolloAdapter';

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return isLoggedIn ? <LoggedInRouter /> : <LoggedOutRouter />;
}

export default App;
