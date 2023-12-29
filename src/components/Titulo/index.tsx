import { Titulo as Tituloestilo } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Titulo = (props: Props) => (
  <Tituloestilo fontSize={props.fontSize}>{props.children}</Tituloestilo>
)

export default Titulo
