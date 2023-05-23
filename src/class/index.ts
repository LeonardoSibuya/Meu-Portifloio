class Projects {
  title: string
  image: string
  description: string
  site: string
  code: string
  id: number

  constructor(
    id: number,
    title: string,
    image: string,
    description: string,
    site: string,
    code: string
  ) {
    //O THIS representa o class criado la em cima, nesse caso a class Game, e o que vem depois do = representa o constructor acima.
    this.id = id
    this.description = description
    this.image = image
    this.title = title
    this.site = site
    this.code = code
  }
}

export default Projects
