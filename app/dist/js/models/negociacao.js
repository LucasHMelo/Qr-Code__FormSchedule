export class Negociacao {
    constructor(_data, horaEntrada, horaSaída) {
        this._data = _data;
        this.horaEntrada = horaEntrada;
        this.horaSaída = horaSaída;
    }
    static criaDe(dataString, horaEntradaString, horaSaídaString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        return new Negociacao(date, horaEntradaString, horaSaídaString);
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    paraTexto() {
        return `
            Data: ${this.data},
            Hora Entrada: ${this.horaEntrada},
            Hora Saída: ${this.horaSaída}
        `;
    }
    ehIgual(negociacao) {
        return this.data.getDate() === negociacao.data.getDate()
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear();
    }
}
//# sourceMappingURL=negociacao.js.map