import { Produto } from "../model/Produto";

export interface ProdutoRepository {

	procurarPorID(produto: Produto): void;
	listarTodas(): void;
	cadastrar(produto: Produto): void;
	atualizar(estoque: Produto): void;
	deletar(produto: number): void;
	
}