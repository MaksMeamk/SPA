import Button from '../components/Button';
import './Authorization.scss';
import logo from '../assets/sibdev-logo.svg';
import Input from '../components/input/Input';
function Authorization() {
  return (
    <>
      <div className="authorization">
        <img src={logo} alt="logo" />
        <h1>Enter</h1>
        <Input
          type="text"
          name="userName"
          placeholder="Enter your login"
          children={'Login'}
        />

        <Button>SIgn in</Button>
      </div>
    </>
  );
}

export default Authorization;
