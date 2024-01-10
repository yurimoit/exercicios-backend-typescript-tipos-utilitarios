type Conn = {
    username: string,
    password: string,
    host: string,
    port: string,
    dbname: string
}

type DadosConn = {
    driver: string,
    url: string
}


const conexao = (dados: Conn): Readonly<DadosConn> => {
    const { username, password, host, port, dbname } = dados;
    return {
        driver: 'postgres',
        url: `postgresql://${username}:${password}@${host}:${port}/${dbname}`
    };
}

