import styled from 'styled-components'

export const Content = styled.div`
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.corPrincipal},
    ${(props) => props.theme.corSecundaria}
  );
  padding: 80px 0;
`

export const Info = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;

  @media (max-width: 768px) {
    display: block;
  }

  img {
    max-width: 460px;
    border-radius: 8px;
    height: 480px;

    @media (max-width: 768px) {
      max-width: 240px;
      height: 240px;
      margin: 0 auto;
      margin-bottom: 16px;
      display: block;
    }
  }
`

export const TextDiv = styled.div`
  max-width: 100%;
  padding-left: 24px;
`

export const Link = styled.a`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  background-color: #7b1111;
  padding: 6px 0;
  width: 120px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.5s ease;
  margin-top: 16px;
  display: inline-block;
  letter-spacing: 1px;

  :hover {
    background-color: #b21717;
  }
`
