import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="secundario">
      Lorem iParagrafosum dolor sit amet consectetur adipisicing elit. Totam
      debitis sapiente, corrupti libero voluptatem suscipit omnis excepturi
      accusantium ipsa ut, sequi eum quod saepe cum voluptates qui quos odit
      cumque?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=PedroTeixeira-dev&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=PedroTeixeira-dev&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
