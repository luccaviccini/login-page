import "../../styles/login.style.css";
import{
    Container,
    Card,
    LabelFloat,
    ButtonContainer,
    HrContainer,
    RegisterParagraph
} from
"../../components/login-register.components.js";
import { Link } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper";


function LoginPage() {
  return (
    <PageWrapper  backgroundImage="https://i.imgur.com/K8lDBYU.jpg">
    <Container>
      <Card>
        <h1>Login</h1>
        <LabelFloat>
          <input type="text" id="username" placeholder="" required/>
          <label htmlFor="username">Username</label>
        </LabelFloat>
        <LabelFloat>
          <input type="password" id="password" placeholder="" required />
          <label htmlFor="password">Password</label>
        </LabelFloat>
        <ButtonContainer>
          <button>Login</button>
        </ButtonContainer>
        <HrContainer>
          <hr />
        </HrContainer>
        <RegisterParagraph>
          Don't have an account? <Link  to="/register">Register</Link>
        </RegisterParagraph>
      </Card>
    </Container>
    </PageWrapper>
  );
}



export default LoginPage;
