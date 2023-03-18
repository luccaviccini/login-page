import styled from "styled-components";
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


function LoginPage() {
  return (
    <Container>
      <Card>
        <h1>Login</h1>
        <LabelFloat>
          <input type="text" id="username" placeholder="" required/>
          <label for="username">Username</label>
        </LabelFloat>
        <LabelFloat>
          <input type="password" id="password" placeholder="" required />
          <label for="password">Password</label>
        </LabelFloat>
        <ButtonContainer>
          <button>Login</button>
        </ButtonContainer>
        <HrContainer>
          <hr />
        </HrContainer>
        <RegisterParagraph>
          Don't have an account? <a href="#">Register</a>
        </RegisterParagraph>
      </Card>
    </Container>
  );
}



export default LoginPage;
