import styled from 'styled-components'
import { Subtitle } from '../../components/Subtitle/styles'
import { P } from '../../components/Paragrafo/styles'

export const Visit = styled.a`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  background-color: #7b1111;
  padding: 6px;
  max-width: 100%;
  width: 240px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.5s ease;
  display: block;
  letter-spacing: 1px;
  margin: 24px auto 0;

  @media (max-width: 1024px) {
    margin-top: 32px;
  }

  @media (max-width: 768px) {
    width: 160px;
  }

  :hover {
    background-color: #b21717;
  }
`

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

export const Action = styled.div`
  position: absolute;
  top: 48px;
  left: 0;
  width: 100%;
  height: 78%;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  border-radius: 8px;

  img {
    width: 32px;
    height: 32px;
  }

  @media (max-width: 1024px) {
    display: flex;
    height: 95%;
    top: 40px;
  }

  @media (max-width: 768px) {
    display: flex;
    height: 90%;
    top: 38px;
  }
`

export const ItemProject = styled.li`
  padding-bottom: 28px;
  cursor: pointer;
  position: relative;

  img {
    max-width: 100%;
    width: 100%;
    height: 280px;
    max-height: 100%;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 2px 2px 4px 0px;

    @media (max-width: 1024px) {
      width: 100%;
      height: 100%;
    }

    @media (max-width: 768px) {
      margin-bottom: 12px;
    }
  }

  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;

      @media (max-width: 1024px) {
        display: flex;
      }

      img {
        width: 32px;
        height: 32px;
      }
    }
  }
`
export const ListButtons = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
  }

  ${Visit} {
    max-width: 100%;
    width: 120px;
    margin-top: 16px;
  }
`

export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: start;

  ${Subtitle},
  ${P} {
    color: #fff;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    max-width: 640px;
    width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    max-width: 320px;
  }
`

export const ImgProject = styled.img`
  max-width: 560px;
  width: 100%;
  height: 400px;
  max-height: 100%;
  margin-right: 32px;
  border-radius: 16px;

  @media (max-width: 1024px) {
    max-width: 100%;
    margin-right: 0;
    margin-bottom: 16px;
  }

  @media (max-width: 768px) {
    height: 320px;
  }
`

export const ImageClose = styled.img`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 0;
  right: 0;
  z-index: 1;
  cursor: pointer;

  @media (max-width: 1024px) {
    top: -64px;
    left: 50%;
    right: 50%;
    width: 20px;
    height: 20px;
  }
`
