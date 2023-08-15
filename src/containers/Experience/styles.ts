import styled from 'styled-components'

export const Content = styled.div`
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.corPrincipal},
    ${(props) => props.theme.corSecundaria}
  );
  padding: 80px 0;
`

export const ProjectsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 40px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: start;

    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }

    img {
      max-width: 480px;
      border-radius: 8px;
      height: 400px;
      box-shadow: 1px 2px 4px 0px;
      object-fit: cover;

      @media (max-width: 1024px) {
        max-width: 100%;
        height: 340px;
        margin: 0 auto;
        margin-bottom: 16px;
        display: block;
      }

      @media (max-width: 768px) {
        max-width: 100%;
        height: 240px;
        margin: 0 auto;
        margin-bottom: 16px;
        display: block;
      }
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
