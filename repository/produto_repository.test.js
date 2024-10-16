const produtoRepository = require("./produto_repository.js");

//Cenário de sucesso
test('Quando inserir o produto arroz, deve retornar e conter na lista o produto com id=1'
    , () => {
        //produto que se espera ser cadastrado (com id)
        const produtoInseridoEsperado = {
            id: 1,
            nome: "Arroz",
            categoria: "alimento",
            preco: 4.00
        };
        //Inserindo o produto no repositorio
        const produtoInserido = produtoRepository.inserir({
            nome: "Arroz",
            categoria: "alimento",
            preco: 4.00
        });
        //Verificando se o produto inserido que retornou está correto
        expect(produtoInserido).toEqual(produtoInseridoEsperado);
        //Verificando se o produto foi inserido no repositório
        expect(produtoRepository.listar()).toContainEqual(produtoInseridoEsperado);
    })
//Cenário de exceção
test('Quando inserir o produto sem categoria, não deve retornar e não insere na lista'
    , () => {
        //Criado o cenário (com id=2 porque conta o teste anterior) para o produto inserido sem categoria
        const produtoInseridoErrado = {
            id: 2,
            nome: "Massa",
            preco: 4.00
        };
        //Inserindo o produto sem categoria
        const produtoInserido = produtoRepository.inserir({
            nome: "Massa",
            preco: 4.00
        });
        //O produto não deve retornar
        expect(produtoInserido).toEqual(undefined);
        //Não deve inserir na lista o produto errado
        expect(produtoRepository.listar()).not.toContainEqual(produtoInseridoErrado);
    })
//Cenário de sucesso - buscarPorId()
test('Quando buscar por um id existente, deve retornar o dado corretamente', () => {
    //Vou inserir um segundo produto para o teste (id=2)
    const produtoInserido = produtoRepository.inserir({
        nome: "Feijao",
        categoria: "alimento",
        preco: 7.00
    });
    const resultado = produtoRepository.buscarPorId(produtoInserido.id);
    //Podemos fazer testes mais simples:
    expect(resultado).toBeDefined();
    expect(resultado.nome).toBe("Feijao")
});
//Cenário de exceção - buscarPorId()
test('Quando buscar por id inexistente, deve retornar undefined', () => {
    const resultado = produtoRepository.buscarPorId(10);
    expect(resultado).toBeUndefined();
});

//Cenário de sucesso - deletar()
test('Quando deletar um id existente, deve remover e retornar o dado', () => {
    const produtoDeletadoEsperado = {
        nome: "Feijao",
        categoria: "alimento",
        preco: 7.00,
        id: 2
    };
    const quantidadeEsperada = 1;
    resultado = produtoRepository.deletar(2);
    expect(resultado).toEqual(produtoDeletadoEsperado);
    expect(produtoRepository.listar().length).toBe(quantidadeEsperada);

})

//Cenário de exceção - deletar()
test('Quando deletar um produto com id inexistente, deve retornar undefined', () => {
    const resultado = produtoRepository.deletar(10);
    expect(resultado).toBeUndefined();
});
