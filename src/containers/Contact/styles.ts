import styled from 'styled-components'

export const ContentContact = styled.div`
  background-image: linear-gradient(to right, #09203f, #2c5779);
  padding: 80px 0 0;
`

export const ContainerInfo = styled.div`
  text-align: center;
`

export const ListImg = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`

export const ItemImg = styled.li`
  background-image: linear-gradient(to top, #1c1c1e, #3a3a3d);
  padding: 8px 0;
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 80px;
  }

  a {
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    text-decoration: none;
    padding: 16px 0 0;

    :hover {
      text-decoration: underline;
    }
  }
`
export const FotoAvatar = styled.img`
  max-width: 180px;
  height: 200px;
  width: 100%;
  margin-top: 24px;
  margin-bottom: -6px;
`
