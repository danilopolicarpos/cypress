const el = require('./elements').ELEMENTS

class pesquisa {
    acessarPagina(){
        cy.visit("/")
    } 

    realizarPesquisa(){
        cy.get(el.fieldSearch).type("danilo policarpo")
        cy.get(el.btnSearch).click()
    }

    resultadoPesquisa(){
        cy.get(el.resultSearch).contains("Danilo Policarpo")
    }
}
export default new pesquisa();