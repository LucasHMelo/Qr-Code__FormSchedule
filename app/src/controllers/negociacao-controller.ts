import { domInjector } from '../decorators/dom-injector.js';
import { inspect } from '../decorators/inspect.js';
import { logarTempoDeExecucao } from '../decorators/logar-tempo-de-execucao.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { NegociacoesService } from '../services/negociacoes-service.js';
import { imprimir } from '../utils/imprimir.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';

export class NegociacaoController {
    @domInjector('#data')
    private inputData: HTMLInputElement;
    @domInjector('#data-entrada')
    private inputDtEntrada: HTMLInputElement;
    @domInjector('#data-saida')
    private inputDtSaida: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    // private negociacoesService = new NegociacoesService();

    constructor() {
        this.negociacoesView.update(this.negociacoes);
    }

    @inspect
    @logarTempoDeExecucao()
    public adiciona(): void {
        
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputDtEntrada.value,
            this.inputDtSaida.value
        );

        this.negociacoes.adiciona(negociacao);
        imprimir(negociacao, this.negociacoes);
        this.limparFormulario();
        this.atualizaView();
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputDtEntrada.value = '';
        this.inputDtSaida.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Horário adicionada com sucesso, aguarde a aprovação');
    }
}
