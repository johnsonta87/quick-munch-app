import { AppContainer, AppInner } from './styles/app.styles';
import Login from './components/Login/Login';

function App() {
  return (
    <AppContainer>
      <AppInner>
        <Login />
      </AppInner>
    </AppContainer>
  );
}

export default App;
