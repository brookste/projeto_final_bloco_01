export abstract class Produto {
    private _preco: number
    private _nome: string
    private _id: number
    private _estoque: number

    constructor(preco: number, nome: string, id: number, estoque: number){
        this._preco = preco
        this._nome = nome
        this._id = id
        this._estoque = estoque
    }

    public set preco(preco: number){
        this._preco = preco
    }

    public get preco(){
        return this._preco
    }

     public set nome(nome: string){
        this._nome = nome
    }

    public get nome(){
        return this._nome
    }

     public set id(id: number){
        this._id = id
    }

    public get id(){
        return this._id
    }

     public set estoque(estoque: number){
        this._estoque = estoque
    }

    public get estoque(){
        return this._estoque
    }

    public vender(quantidade: number): boolean {
        if(quantidade <= this._estoque){
            this._estoque -= quantidade
            console.log(`Venda de ${quantidade} unidades de ${this.nome} foi realizada`)
            return true
        }
        console.log(`Estoque insuficiente para ${this.nome}. Disponivel ${this._estoque}`)
        return false
    }

   
    public reabastecerEstoque(quantidade: number): void {		
        if (quantidade > 0) {		
            this._estoque += quantidade;		
            console.log(`Estoque de ${this.nome} atualizado. Novo total: ${this._estoque}`);
        }	
    }

    public visualizar(): void {

    this._nome = "";

    }

       
}