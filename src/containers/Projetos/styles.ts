import styled from 'styled-components'

export const ContentProjects = styled.div`
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.corTercearia},
    ${(props) => props.theme.corSecundaria}
  );
  padding: 80px 0;
`

export const ListProjects = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 1024px;
  width: 100%;

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr;
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`

export const ItemProject = styled.li`
  padding-bottom: 28px;

  img {
    max-width: 100%;
    border-radius: 8px;

    @media (max-width: 768px) {
      margin-bottom: 12px;
    }
  }
`
export const ListButtons = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Visit = styled.a`
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
export const Code = styled.a`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  background-color: #1f1f94;
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
    background-color: #2f2fce;
  }
`
