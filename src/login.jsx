import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "reactstrap";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (label, value) => {
    setInput((prev) => ({ ...prev, [label]: value }));
  };

  const handleSubmit = () => {
    localStorage.setItem("access_token", JSON.stringify(input));
    navigate("/home");
  };

  return (
    <Container>
      <h1>HALAMAN LOGIN</h1>
      <input
        onChange={(e) => handleChange("email", e.target.value)}
        placeholder="email"
        type="email"
      />
      <input
        onChange={(e) => handleChange("password", e.target.value)}
        placeholder="password"
        type="password"
      />
      <button onClick={handleSubmit}>submit</button>
    </Container>
  );
};

export default Login;
