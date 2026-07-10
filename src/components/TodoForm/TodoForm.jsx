import styles from "./todoForm.module.css"
import { useState } from "react"
import { Plus } from "lucide-react"

const TodoForm = ({ onAgregarNota }) => {
    const [textNote, setTextNote] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        if(textNote.trim() === "") {
            console.log("No se pueden agregar notas vacías")
            return
        }
        
        // Creamos la nota directamente en memoria
        const newNote = {
            id: crypto.randomUUID(),
            text: textNote,
            completed: false
        }

        // Usamos la prop recibida para enviar la nota al componente padre
        onAgregarNota(newNote)
        setTextNote("")
    }

    return(
        <div className={styles.formContainer}>
            <h2>Nueva Tarea</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    id="nota" 
                    name="nota" 
                    value={textNote} 
                    onChange={(event) => setTextNote(event.target.value)}
                    placeholder="Escribe una tarea..."
                />
                <button type="submit">
                    <Plus size={16} />
                    Crear nota
                </button>
            </form>
        </div>
    )
}

export default TodoForm