import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "reactstrap";

const Home = () => {
  const navigate = useNavigate();

  const accessToken = useMemo(() => {
    return localStorage.getItem("access_token");
  }, []);

  return (
    <Container>
      <h1>HALAMAN HOME</h1>
      {accessToken ? (
        <>
          <h2>SUDAH LOGIN</h2>
          <h3>{JSON.parse(accessToken).email}</h3>
          <h3>{JSON.parse(accessToken).password}</h3>
        </>
      ) : (
        <>
          <h2>BELUM LOGIN, BALIK LAGI SANA</h2>
          <Button
            onClick={() => {
              navigate("/login");
            }}
          >
            BYE
          </Button>
        </>
      )}
    </Container>
  );
};

export default Home;
