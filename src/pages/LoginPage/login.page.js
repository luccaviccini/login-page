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

function LoginPage() {
  return (
    <Container bgImgUrl = "https://i.imgur.com/K8lDBYU.jpg">
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
  );
}



export default LoginPage;
