import styles from "../todoApp.module.css";
import { useState } from "react";

const EditNoteForm = ({ nota, onEditarNota, onCancelar }) => {
    // Inicializamos el estado con el texto actual de la nota para que no aparezca en blanco
    const [textoEditado, setTextoEditado] = useState(nota.text);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Evitamos que guarden notas vacías
        if (textoEditado.trim() === "") {
            console.log("No se puede guardar una nota vacía");
            return;
        }

        // Creamos el objeto de la nota actualizada
        const notaActualizada = {
            ...nota,
            text: textoEditado
        };

        // Ejecutamos las funciones que vienen por props
        onEditarNota(notaActualizada);
        onCancelar(); // Cierra el formulario
    };

    return (
        <form onSubmit={handleSubmit} className={styles.editForm}>
            <input
                type="text"
                value={textoEditado}
                onChange={(e) => setTextoEditado(e.target.value)}
                className={styles.editInput}
            />

            <button type="submit" className={styles.saveButton}>
                Guardar
            </button>
            <button
                type="button"
                onClick={onCancelar}
                className={styles.cancelButton}
            >
                Cancelar
            </button>
        </form>
    );
};

export default EditNoteForm;