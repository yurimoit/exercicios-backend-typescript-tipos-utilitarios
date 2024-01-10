type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNascimento?: string
}

type UsuarioParcial = Partial<Usuario>
type Keys = "rg"
type UsuarioParcial2 = Omit<Usuario, Keys>

const cadastrarUsuário = (info: Required<UsuarioParcial2>): UsuarioParcial2 => {
    return info;
}