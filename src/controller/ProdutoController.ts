import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { colors } from "../util/Colors";

export class ProdutoController implements ProdutoRepository{

    private listaProdutos: Array<Produto> = new Array<Produto>()
    numero: number = 0

    procurarPorID(produto: Produto): void {
      let buscaProduto = this.buscarNoArray(produto.id);

        if (buscaProduto != null) {
            buscaProduto.visualizar();
        } 
        else
            console.log(colors.fg.red, "\nO produto numero: " + produto.id
                + " não foi encontrado!", colors.reset);
        }

   listarTodas(): void {
        for (let produto of this.listaProdutos){
            produto.visualizar()
        }
    }

    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log(colors.fg.red, "\nProduto número: " + produto.id + "foi criado com sucesso!", colors.reset)
    }


    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.id);

        if (buscaProduto != null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log(colors.fg.green, "\nO produto numero: " + produto.id +
                " foi atualizado com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nO produto numero: " + produto.id +
                " não foi encontrado!", colors.reset);
    }

    deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if(buscaProduto != null) {
            (this.listaProdutos.indexOf(buscaProduto), 1)
            console.log(colors.fg.green,"\nO produto numero: " + id + "foi apagadao!", colors.reset)
        } else{
            console.log(colors.fg.red, "\nO produto numero: " + id +
                " não foi encontrado!", colors.reset);
        }
    }


     public gerarNumero(): number {
    return ++ this.numero}
    
    public buscarNoArray(numero: number): Produto | null {
        for (let produto of this.listaProdutos) {
            if (produto.id === numero)
                return produto;
        }
           return null;
}
}
