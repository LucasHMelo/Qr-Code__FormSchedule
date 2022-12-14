import { escapar } from '../decorators/escapar.js';
import { Negociacoes } from '../models/negociacoes.js';
import { View } from './view.js';

export class NegociacoesView extends View<Negociacoes> {

    @escapar
    protected template(model: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>Hora Entrada</th>
                    <th>Hora Saída</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(negociacao => {
                    return `
                        <tr>
                            <td>${this.formatar(negociacao.data)}
                            </td>
                            <td>
                                ${negociacao.horaEntrada}
                            </td>
                            <td>
                                ${negociacao.horaSaída}
                            </td>
                            <td style="text-align:center">
                                <i class="fa-solid fa-circle-check" style="margin-right: 25px;"> </i><i class="fa-sharp fa-solid fa-trash"></i>
                            </td>
                        </tr>
                    `;
                }).join('')}
            </tbody>
        </table>
        `;
    }

    private formatar(data: Date): string {
        return new Intl.DateTimeFormat()
            .format(data);
    }
}