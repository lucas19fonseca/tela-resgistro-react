import "./style.css"
export default function login(){
    return(
        <div className="login">
            <h3 className="titulo">Login</h3>
            <div className="nome">
            <input type="text" placeholder="usuário" />
            <input type="text" placeholder="senha" />
            </div>
            <button className="botao">Enviar</button>
        </div>
    )
}
