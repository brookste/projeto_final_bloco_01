import { Produto } from "./Produto"

export class Funcoes extends Produto {

    private _desconto: number

    constructor(preco: number, nome: string, id: number, estoque: number, desconto: number) {
        super(preco, nome, id, estoque)
        this._desconto = desconto
    }

    public get desconto() {
        return this._desconto
    }

    public set desconto(desconto: number){
        this._desconto = desconto
    }

     public calcularDesconto(percentual: number): number {
        const desconto = this.preco * (percentual / 100);
        return this.preco - desconto;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Desconto de: " + this._desconto);
    }
}