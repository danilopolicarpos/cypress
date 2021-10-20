

Given(/^que eu esteja na página do google$/, () => {
	cy.visit("/")
});

When(/^realizar uma pesquisa$/, () => {
	cy.get('.gLFyf').type("danilo policarpo")
	cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
});

Then(/^vejo o resultado da pesquisa informada$/, () => {
	cy.get('#rso').contains("Danilo Policarpo")
});

