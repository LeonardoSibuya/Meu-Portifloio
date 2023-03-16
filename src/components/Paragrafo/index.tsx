import { P } from './styles'

export type PropsType = {
  children: string
}

const Paragrafo = ({ children }: PropsType) => <P>{children}</P>

export default Paragrafo
