import LoginForm from '../../../components/LoginForm';
import MainComponent from '../../../components/shared/MainComponent';

const Login: React.FC = () => {
  return(
    <div>
      <MainComponent>
        <div>
          <LoginForm titlePhrase="Acessar a minha conta" buttonPhrase="Entrar" />
        </div>
      </MainComponent>
    </div>
  )
}

export default Login;