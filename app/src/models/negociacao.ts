import { Modelo } from '../interfaces/modelo.js';

export class Negociacao implements Modelo<Negociacao> {
    constructor(
        private _data: Date, 
        public readonly horaEntrada: String, 
        public readonly horaSaída: String
    ) {}

    public static criaDe(dataString: string, horaEntradaString: string, horaSaídaString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));

        return new Negociacao(date, horaEntradaString, horaSaídaString);
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public paraTexto(): string {
        return `
            Data: ${this.data},
            Hora Entrada: ${this.horaEntrada},
            Hora Saída: ${this.horaSaída}
        `;
    }

    public ehIgual(negociacao: Negociacao): boolean {
        return this.data.getDate() === negociacao.data.getDate()
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear();
    }
}
