import {
  Body,
  Button,
  Heading,
  TextInput,
} from "@maxio-com/react-ui-components";
import "./Login.css";
import Logo from "./Logo";

type LoginProps = {
  onLogin: () => void;
};

const Login = ({ onLogin }: LoginProps) => {
  return (
    <div className="maxio-login-form">
      <a className="maxio-login-form__logo" href="#">
        <Logo />
      </a>
      <Heading size="lg" className="maxio-login-form__text">
        Login
      </Heading>
      <Body className="maxio-login-form__text" size="sm" compact>
        Log in to continue
      </Body>

      <TextInput label="Username" helperText="Your username or email" />
      <TextInput label="Password" type="password" />

      <Button onClick={onLogin}>Login</Button>
    </div>
  );
};

export default Login;
