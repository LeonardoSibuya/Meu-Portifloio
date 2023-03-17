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
  position: relative;
`

export const Link = styled.a`
  color: #fff;
  text-decoration: none;

  :after {
    content: '';
    position: absolute;
    background-color: #ff0000;
    height: 2px;
    width: 0;
    left: 0;
    bottom: -5px;
    transition: 0.8s ease;
  }

  :hover {
    color: #d04c4c;
    transition: 0.2s ease;
  }

  :hover:after {
    width: 100%;
  }
`

export const LinkExterno = styled.a`
  color: #ff0000;
  text-decoration: none;

  :after {
    content: '';
    position: absolute;
    background-color: #ff0000;
    height: 2px;
    width: 0;
    left: 0;
    bottom: -5px;
    transition: 0.8s ease;
  }

  :hover {
    color: #d04c4c;
    transition: 0.2s ease;
  }

  :hover:after {
    width: 100%;
  }
`

export const ListaItens = styled.ul`
  display: flex;
`
