import styled from 'styled-components'

export const Lista = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 16px 0;
  background-color: #010309;
  position: fixed;
  width: 100%;
  box-shadow: 0 0 10px 1px;
  z-index: 1;

  @media (max-width: 1024px) {
    padding: 8px 0;
    padding-left: 16px;
    justify-content: left;
  }

  @media (max-width: 768px) {
    padding: 8px 0;
    padding-left: 16px;
    justify-content: left;
  }

  button {
    display: none;

    @media (max-width: 1024px) {
      display: block;
      color: #fff;
      background-color: transparent;
      border: none;
      border-radius: 6px;
      padding: 2px 4px;
      margin: 8px 0;
      font-size: 24px;
    }

    @media (max-width: 768px) {
      display: block;
      color: #fff;
      background-color: transparent;
      border: none;
      border-radius: 6px;
      padding: 2px 4px;
      margin: 8px 0;
      font-size: 24px;
    }
  }
`
export const Item = styled.li`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  padding: 0 8px;
  position: relative;

  @media (max-width: 1024px) {
    font-size: 14px;
    padding: 6px 0;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px 0;
  }
`

export const ItemNome = styled.li`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  padding: 0 8px;
  position: relative;

  @media (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
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

export const ListaItensContent = styled.ul<{ isOpen: boolean }>`
  display: flex;

  @media (max-width: 1024px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
`

export const ListaItens = styled.ul`
  display: flex;

  @media (max-width: 1024px) {
    display: block;
  }

  @media (max-width: 768px) {
    display: block;
  }
`
