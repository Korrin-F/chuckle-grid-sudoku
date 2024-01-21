import Container from "react-bootstrap/Container";
import Form from "../../components/HomeSection/HomeForm";
import HomeHeader from "../../components/HomeSection/HomeHeader";

const styles = {
  backgroundColor: "var(--teal)"
}

function Home(){
  return (
    <>
    <Container fluid className="pt-5 flex-grow-1" style={styles}>
        <HomeHeader />
        <Form />
    </Container> 
    </>
  );
};

export default Home;