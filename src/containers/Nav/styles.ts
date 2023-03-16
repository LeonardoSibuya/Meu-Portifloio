import styled from 'styled-components'

export const Lista = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 16px 0;
  background-color: #010309;
`
export const Item = styled.li`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  padding: 0 8px;
`

export const Link = styled.a`
  color: #fff;
  text-decoration: none;
  transition: 0.5s ease;

  :hover {
    color: #aeaeae;
  }
`

export const LinkExterno = styled.a`
  color: #ff0000;
  text-decoration: none;
  transition: 0.5s ease;

  :hover {
    color: #d04c4c;
  }
`

export const ListaItens = styled.ul`
  display: flex;
`
