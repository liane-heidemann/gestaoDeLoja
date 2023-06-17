var continuar = true;
var opcao;
var removerProduto;

//ITENS NO ESTOQUE 
var itensDoEstoque = [{
    produto: "Roupas",
    valor: 60,
    quantidade: 46
}, {
    produto: "Calçados",
    valor: 80,
    quantidade: 30
}, {
    produto: "Acessórios",
    valor: 80,
    quantidade: 9
}];

console.log("1 -> Exibir Estoque Completo\n2 -> Adicionar Item no Estoque\n3 - > Remover Produto do Estoque\n4 - > Editar produto\n5 - > Buscar Item\n6 -> Sair\n");

//LISTA DE OPÇÕES 
while (continuar) {
    opcao = prompt("\nEscolha uma Opção: ");
    switch (opcao) {
        case "1":
            printArray(itensDoEstoque);
            break;
        case "2":
            addItemNoEstoque();
            break;
        case "3":
            removerItemNoEstoque();
            break;
        case "4":
            edicaoDeItens();
            break;
        case "5":
            buscarItem();
            break;
        case "6":
            console.log("\nSistema finalizado.");
            continuar = false;
            break;
    }
}

function printArray(itensDoEstoque) {
    for (var i = 0; i < itensDoEstoque.length; i++) {
        console.log((i + 1) + ") - Produto: " + itensDoEstoque[i].produto + ", Preço: " + itensDoEstoque[i].valor +
            ", Quantidade: " + itensDoEstoque[i].quantidade);
    }
}
var produtoX;
var valorX;
var quantidadeX;

function addItemNoEstoque() {
    produtoX = prompt("Nome do Produto: ");
    valorX = prompt("Valor: ");
    quantidadeX = prompt("Quantidade: ");
    itensDoEstoque.push({
        produto: produtoX,
        valor: valorX,
        quantidade: quantidadeX
    });
    continuar = prompt("Adicionar outro Item? [S ou N] ");
    if (continuar == "S" || continuar == "s") {
        addItemNoEstoque();
    }
    else {
        return;
    }
}

function removerItemNoEstoque() {
    removerProduto = prompt("Nome do Produto a ser Removido: ");
    var i;
    for (i = 0; i < itensDoEstoque.length; i++) {
        if (itensDoEstoque[i].produto == removerProduto) {
            break;
        }
    }
    const idxObj = itensDoEstoque.findIndex(object => {
        return object.produto === removerProduto;
    });
    itensDoEstoque.splice(idxObj, i);
}

function edicaoDeItens() {
    console.log("Nomes dos Produtos: Acessórios");;
    nomeDoProduto = prompt("Nomes dos Produtos a serem Editados: ");
    var i;
    for (i = 0; i < itensDoEstoque.length; i++) {
        if (itensDoEstoque[i].produto == nomeDoProduto) {
            break;
        }
    }
    var editar = prompt("Selecione Opção: 1-> Nome 2->Valor, 3->Quantidade: ");
    var dado = prompt("Novos Dados: ");
    switch (editar) {
        case "1":
            itensDoEstoque[i].produto = dado;
            break;
        case "2":
            itensDoEstoque[i].valor = dado;
            break;
        case "3":
            itensDoEstoque[i].quantidade = dado;
            break
    }
}

function printItem(i) {
    console.log((i + 1) + ") - Produto: " + itensDoEstoque[i].produto + ", Preço: " + itensDoEstoque[i].valor +
        ", Quantidade: " + itensDoEstoque[i].quantidade);
}

function buscarItem() {
    var busca = prompt("Selecione Opção: 1-> Nome 2->Valor, 3->Quantidade: : ");
    var filtro = prompt("Filtro : ");
    switch (busca) {
        case "1":
            for (var i = 0; i < itensDoEstoque.length; i++) {
                if (itensDoEstoque[i].produto == filtro) {
                    printItem(i);
                }
            }
            break;
        case "2":
            for (var i = 0; i < itensDoEstoque.length; i++) {
                if (itensDoEstoque[i].valor == filtro) {
                    printItem(i);
                }
            }
            break;
        case "3":
            for (var i = 0; i < itensDoEstoque.length; i++) {
                if (itensDoEstoque[i].quantidade == filtro) {
                    printItem(i);
                }
            }
            break;
    }
}