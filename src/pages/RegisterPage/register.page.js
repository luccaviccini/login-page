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

function RegisterPage() {
  return (
    <Container bgImgUrl = "https://i.imgur.com/XbRg9D7.png">
      <Card>
        <h1>Register</h1>
        <LabelFloat>
            <input type="text" id="name" placeholder="" required/>
            <label htmlFor="name">Name</label>
        </LabelFloat>
        <LabelFloat>
          <input type="text" id="username" placeholder="" required/>
          <label htmlFor="username">Username</label>
        </LabelFloat>
        <LabelFloat>
          <input type="password" id="password" placeholder="" required />
          <label htmlFor="password">Password</label>
        </LabelFloat>
        <LabelFloat>
          <input type="password" id="confirm-password" placeholder="" required />
          <label htmlFor="confirm-password">Confirm Password</label>
        </LabelFloat>
        <ButtonContainer>
          <button>Register</button>
        </ButtonContainer>
        <HrContainer>
          <hr />
        </HrContainer>
        <RegisterParagraph>
          Already have an account? <Link  to="/">Login</Link>
        </RegisterParagraph>
      </Card>
    </Container>
  );
}

export default RegisterPage;