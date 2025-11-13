import leia = require ("readline-sync")
import { Produto } from "./src/model/Produto";
import { colors } from "./src/util/Colors";

export function main(){

    let opcao, preco, estoque, id: number
    let nome: string

    while(true){

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                       TRAX-ART                      ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar produto                        ");
        console.log("            2 - Listar todos os produtos             ");
        console.log("            3 - Buscar produto por ID                ");
        console.log("            4 - Atualizar produto                    ");
        console.log("            5 - Apagar produto                       ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = leia.questionInt("");

        if (opcao == 6) {
            console.log("TRAX-ART sempre a sua melhor opcao!")
            sobre()
            process.exit(0)
        }

         switch (opcao) {
            case 1:
                console.log(colors.fg.red, "\n\nCriar Produto\n\n", colors.reset);

                console.log ("Digite o nome do produto: ")
                nome = leia.question("")

                console.log("Digite o preco do produto: ")
                preco = leia.questionFloat("")

                console.log("Digite a quantidade do estoque: ")
                estoque = leia.questionInt()

                console.log("Digite o ID do produto: ")
                id = leia.questionInt("")


                keyPress()
                break;
            case 2:
                console.log("\n\nListar todos os produtos\n\n");
                
                keyPress()
                break;
            case 3:
                console.log("\n\nBuscar produto por ID\n\n");

                keyPress()
                break;
            case 4:
                console.log("\n\nAtualizar produto\n\n");

                keyPress()
                break;
            case 5:
                console.log("\n\nApagar produto \n\n");
                
                keyPress()
                break;
            case 6:
                console.log("\n\nSair \n\n");
                
                keyPress()
                break;
            
        }
    }

    }
    export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Ester Santos");
    console.log("Generation Brasil - esterssantos03@gmail.com");
    console.log("github.com/brookste");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    leia.prompt();
}


main()