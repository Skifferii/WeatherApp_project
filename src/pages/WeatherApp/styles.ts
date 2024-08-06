import styled from '@emotion/styled'
import {Link} from 'react-router-dom'

export const MenuPage = styled.div`
 display: flex;
 flex-direction: column-reverse;
 justify-content: center;
 gap: 30px;
 flex: 1;
`

export const Title = styled.h1`
  font-size: 30px;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  font-weight: bold
`
