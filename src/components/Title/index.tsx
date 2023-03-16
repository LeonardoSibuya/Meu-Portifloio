import { Title } from './styles'

export type PropsType = {
  children: string
}

const Titulo = ({ children }: PropsType) => <Title>{children}</Title>

export default Titulo
