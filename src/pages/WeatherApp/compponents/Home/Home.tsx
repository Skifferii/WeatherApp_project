import Weather from "../Weather/Weather";
import { HomePage, StyledLink, Title } from "./styles";

function Home() {
  return (
    <HomePage>
      <Title>Home page content</Title>
          <Weather/> 
    </HomePage>
  )
}

export default Home