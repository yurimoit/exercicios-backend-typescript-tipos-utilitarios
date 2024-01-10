type Item = {
    nome: string,
    descricao: string,
    valor: number
}

type Cartao = {
    numero: number,
    validade: string,
    nome: string,
    cvv: number
}

type Endereco = {
    cep: string,
    rua: string,
    bairro: string,
    cidade: string,
    estado: string
}

type LiteralType = 'credito' | 'Debito'
type TipoTransacao = Lowercase<LiteralType>

type Carrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: TipoTransacao,
    cartao: Cartao,
    endereco: Endereco
}