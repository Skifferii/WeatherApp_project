import { Global, css } from "@emotion/react"
import BackGroundImage from "../assets/BackGroundImage.jpeg"

const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  body,
  html {
    height: 100%;
    margin: 0;
    padding: 0;
    background-image: url(${BackGroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  #root {
    display: flex;
    min-height: 100%;
  }
`

function GlobalStyles() {
  return <Global styles={globalStyles} />
}

export default GlobalStyles
