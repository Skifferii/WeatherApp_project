import { MenuPage, Title, StyledLink } from "./styles"

function Menu() {
  return (
    <MenuPage>
      <Title>Menu</Title>
      <StyledLink to='Home'>Home</StyledLink>
      <StyledLink to='History'>History</StyledLink>      
    </MenuPage>
  )
}

export default Menu