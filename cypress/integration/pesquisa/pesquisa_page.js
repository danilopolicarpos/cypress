
class pesquisa {
    constructor() {
        this.fieldSearch = '.gLFyf',
        this.btnSearch = '.aajZCb > .lJ9FBc > center > .gNO89b'
        this.resultSearch = '#rso'
     }
  
   get acessarPagina(){
      return  cy.visit("/")
    } 

    get realizarPesquisa(){
       return cy.get(this.fieldSearch).type("danilo policarpo"),
       cy.get(this.btnSearch).click()
    }

    get resultadoPesquisa(){
       return cy.get(this.resultSearch)
    }
}
export default new pesquisa();