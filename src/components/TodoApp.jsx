import styles from "./todoApp.module.css";
import { useState } from "react";
import TodoForm from "./TodoForm/TodoForm";
import EditNoteForm from "./EditNoteForm/EditNoteForm";
import { SquarePen, Trash } from "lucide-react";

function TodoApp() {
    const [notas, setNotas] = useState([
        { id: "1", text: "Configurar el proyecto en Vite", completed: true },
        { id: "2", text: "Aprender componentes y props", completed: false }
    ]);
    const [notaEditandoId, setNotaEditandoId] = useState(null);

    const agregarNota = (nuevaNota) => {
        setNotas([...notas, nuevaNota]);
    };

    const eliminarNota = (id) => {
        setNotas(notas.filter((nota) => nota.id !== id));
    };

    const actualizarNota = (notaActualizada) => {
        setNotas(
            notas.map((nota) => {
                return nota.id === notaActualizada.id ? notaActualizada : nota;
            })
        );
    };

    const marcarComoCompleta = (notaId) => {
        setNotas(
            notas.map((nota) =>
                nota.id === notaId ? { ...nota, completed: !nota.completed } : nota
            )
        );
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Mi Lista de Tareas</h1>
            
            <TodoForm onAgregarNota={agregarNota} />
            
            <ul className={styles.noteList}>
                {notas.map((nota) => (
                    <li className={styles.noteItem} key={nota.id}>
                        <span>
                            {nota.text} {nota.completed ? "✅" : "❎"}
                        </span>
                        
                        <div className={styles.iconsContainer}>
                            <button onClick={() => marcarComoCompleta(nota.id)}>
                                {nota.completed ? "Desmarcar" : "Completar"}
                            </button>
                            <SquarePen
                                onClick={() => setNotaEditandoId(nota.id)}
                                size={26}
                            />
                            <Trash
                                onClick={() => eliminarNota(nota.id)}
                                size={26}
                            />
                        </div>

                        {notaEditandoId === nota.id && (
                            <EditNoteForm
                                nota={nota}
                                onEditarNota={actualizarNota}
                                onCancelar={() => setNotaEditandoId(null)}
                            />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;