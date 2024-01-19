import HomeTemp from "../../components/HomeSection/HomeTemp";
import Container from "react-bootstrap/Container";
import Form from "../../components/HomeSection/HomeForm";
import HomeHeader from "../../components/HomeSection/HomeHeader";

function Home(props){
  return (
    <>
    <Container  className="mt-5 flex-grow-1">
        <HomeHeader />
        <Form />
    </Container> 
    </>
  );
};

export default Home;