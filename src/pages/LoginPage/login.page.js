import styled from "styled-components";
import "./login.style.css";

function LoginPage() {
  return (
    <Container>
      <Card>
        <h1>Login</h1>
        <LabelFloat>
          <input type="text" id="username" placeholder="" />
          <label for="username">Username</label>
        </LabelFloat>
        <LabelFloat>
          <input type="password" id="password" placeholder="" />
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

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
  font-family: "Roboto", sans-serif;

  h1 {
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
    color: #272262;
    margin-bottom: 20px;
  }
`;
const Card = styled.div`
  background-color: #ffffff80;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 6px 5px 1px 0 rgba(0, 0, 0, 0.7);
`;
const LabelFloat = styled.div`
  position: relative;
  padding-top: 13px;
  margin: 5% 0;

  input {
    width: 100%;
    padding: 5px 5px;
    display: inline-block;
    border: 0;
    border-bottom: 2px solid #272262;
    background-color: transparent;
    outline: none;
    min-width: 180px;
    font-size: 16px;
    transition: all 0.3s ease-out;
    border-radius: 0;
    color: #272262;
  }

  input:focus {
    border-bottom: 2px solid #4038a0;
  }

  label {
    color: #272262;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 13px;
    transition: all 0.3s ease-out;
  }

  input:focus + label {
    font-size: 13px;
    margin-top: 0px;
    color: #4038a0;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  button {
    background-color: transparent;
    border-color: #272262;
    color: #272262;
    font-weight: bold;
    font-size: 12pt;
    margin-top: 20px;
    border-radius: 4px;
    outline: none;
    transition: all 0.2s ease-out;
    padding: 10px 10px;
  }

  button:hover {
    background-color: #272262;
    color: #ffffff;
  }
`;
const HrContainer = styled.div`
  hr {
    margin-top: 10%;
    margin-bottom: 10%;
    width: 60%;
  }
`;
const RegisterParagraph = styled.p`
  color: #272262;
  font-size: 14pt;
  text-align: center;
    a {
        color: #4038a0;
        text-decoration: none;
        font-weight: bold;
        transition: all 0.2s ease-out;
    }

    a:hover {
        color: #272262;
    }
`;

export default LoginPage;
