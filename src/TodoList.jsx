import React, { useState } from "react";
import './TodoList.css';
import iconDisplay from './assets/img-display.svg'

function TodoList() {

    const [Lista, setLista] = useState([]);
    const [novoItem, setNovoItem] = useState('');

    function addItem(form) {
        form.preventDefault();
        if (!novoItem) {
            return;
        }
        setLista([...Lista, { Text: novoItem, completo: false }]);
        setNovoItem('');
        document.getElementById('todoName').focus();
    }

    function clicado(index) {
        const listaAuxiliar = [...Lista];
        listaAuxiliar[index].completo = !listaAuxiliar[index].completo;
        setLista(listaAuxiliar);
    }

    function deleta(index) {
        const listaAuxiliar = [...Lista];
        listaAuxiliar.splice(index, 1);
        setLista(listaAuxiliar)
    }

    function deletaTudo() {
        setLista([]);
    }

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <form onSubmit={addItem}>
                <input type="text" name="todoName" id="todoName" autoComplete="off" placeholder="Adicionar tarefa" value={novoItem} onChange={(e) => { setNovoItem(e.target.value) }} />
                <button type="submit" id="btnSubmit">ADD</button>
            </form>
            <div className="campo-todo">
                <div>
                    {
                        Lista.length < 1
                            ?
                            <img id="img-display" src={iconDisplay} />
                            :
                            Lista.map((item, index) => (
                                <div key={index} className={item.completo ? 'item-marcado' : 'item'}>
                                    <div onClick={() => { clicado(index) }}></div>
                                    <span onClick={() => { clicado(index) }}>{item.Text}</span>
                                    <button onClick={() => { deleta(index) }} className="remover">Deletar</button>
                                </div>
                            ))
                    }
                </div>
            </div>
            <div className="campoInfo">
                {
                    Lista.length > 0 &&
                    <button className="deletarTudo" onClick={() => { deletaTudo() }}>Deletar todas as tarefas</button>
                }
            </div>
        </div>
    )
}

export default TodoList