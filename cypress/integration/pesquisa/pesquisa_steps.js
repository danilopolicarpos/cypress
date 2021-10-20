import pesquisa from './pesquisa_page';

Given(/^que eu esteja na página do google$/, () => {
	pesquisa.acessarPagina
});

When(/^realizar uma pesquisa$/, () => {
	pesquisa.realizarPesquisa
});

Then(/^vejo o resultado da pesquisa informada$/, () => {
	pesquisa.resultadoPesquisa
});

