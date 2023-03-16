import { Pilula } from './styles'

export type PropsPill = {
  bgColor: string
  child?: string
  image?: string
}

const Pill = ({ bgColor, image, child }: PropsPill) => (
  <Pilula bgColor={bgColor}>
    <img src={image} />
    {child}
  </Pilula>
)

export default Pill
