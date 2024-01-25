import Container from "react-bootstrap/Container";
import Form from "../../components/HomeSection/HomeForm";
import HomeHeader from "../../components/HomeSection/HomeHeader";
import Stack from "react-bootstrap/Stack";

const styles = {
  backgroundColor: "var(--teal)"
}

function Home(){
  return (
    <>
    <Container fluid className="pt-5 pb-5 flex-grow-1" style={styles}>
      <Stack direction="vertical" gap={3} className="justify-content-center">
        <HomeHeader />
        <Form />
      </Stack>
    </Container> 
    </>
  );
};

export default Home;