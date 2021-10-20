
class pesquisa {
    elements = {
        fieldSearch: '.gLFyf',
        btnSearch: '.aajZCb > .lJ9FBc > center > .gNO89b',
        resultSearch: '#rso'
    }

    acessarPagina(){
        cy.visit("/")
    } 

    realizarPesquisa(){
        cy.get(elements.fieldSearch).type("danilo policarpo")
        cy.get(elements.btnSearch).click()
    }

    resultadoPesquisa(){
        cy.get(elements.resultSearch).contains("Danilo Policarpo")
    }
}
export default new pesquisa();