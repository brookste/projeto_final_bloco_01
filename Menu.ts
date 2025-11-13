import leia = require ("readline-sync")

export function main(){

    let opcao: number

    while(true){

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                       TRAX-ART                      ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Iniciar pedido                       ");
        console.log("            2 - Listar todos modelos                 ");
        console.log("            3 - Buscar modelo por ID                 ");
        console.log("            4 - Atualizar pedido                     ");
        console.log("            5 - Apagar pedido                        ");
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
                console.log("\n\nIniciar Pedido\n\n");

                break;
            case 2:
                console.log("\n\nListar todos modelos\n\n");

                break;
            case 3:
                console.log("\n\nBuscar modelo por ID\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar pedido\n\n");

                break;
            case 5:
                console.log("\n\nApagar pedido \n\n");

                break;
            case 6:
                console.log("\n\nSair \n\n");

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

main()