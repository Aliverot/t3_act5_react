# Proyecto: t3_act5_react - Aplicación de Lista de Tareas

### Datos del Estudiante
* **Nombre:** Leonardo Fuentes López
* **Número de Control:** 22161062
* **Carrera:** Ingeniería en Sistemas Computacionales
* **Institución:** Instituto Tecnológico de Oaxaca (TecNM)

---

## Descripción del Proyecto
Esta es una pequeña aplicación web construida con **React** y **Vite**. Sirve para gestionar una lista de tareas pendientes: puedes agregar nuevas notas, editarlas, eliminarlas y marcarlas como listas. 

Para este proyecto, toda la información se guarda directamente en la memoria del navegador usando los estados de React, por lo que no hace falta conectarse a una API o base de datos externa. Además, en lugar de usar los estilos por defecto, diseñé una interfaz propia con colores suaves y pastel utilizando **CSS Modules**, lo que ayuda a que los estilos no choquen entre sí en los diferentes componentes.

---

## Respuestas del Cuestionario

### a) ¿Qué diferencia hay entre props y state en React?
* **Props (Propiedades):** Son como los parámetros que le mandamos a una función. Sirven para pasar información desde un componente padre hacia un componente hijo. Lo más importante es que son de "solo lectura", es decir, el componente que las recibe no puede modificarlas.
* **State (Estado):** Es la memoria interna y privada de un componente. A diferencia de las props, el estado sí puede cambiar (por ejemplo, cuando el usuario hace clic o escribe algo). Cuando el estado se actualiza, React se da cuenta y vuelve a dibujar esa parte de la pantalla automáticamente.

### b) ¿Por qué es importante usar una key al renderizar una lista de elementos?
Cuando generamos una lista dinámica (por ejemplo, usando `.map()`), React necesita identificar cada elemento individualmente. La propiedad `key` funciona como un ID único para cada elemento de la lista. 

Si agregamos, borramos o movemos una tarea, la `key` le ayuda a React a saber exactamente qué elemento cambió, para actualizar solo esa pequeña parte de la página de forma rápida. Si no le ponemos `key`, React se confunde, se vuelve más lento y pueden ocurrir errores visuales en la aplicación.

### c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.
`useState` es un Hook que le permite a nuestros componentes "recordar" información. Cuando lo usamos, nos devuelve dos cosas: la variable con el valor actual y una función que sirve específicamente para cambiar ese valor y actualizar la pantalla al mismo tiempo.

**Ejemplo en mi aplicación:**
Lo usé en el archivo `TodoApp.jsx` con la línea `const [notas, setNotas] = useState([])`. Aquí guardo mi arreglo de tareas. Cada vez que agrego o borro una nota usando la función `setNotas`, React automáticamente actualiza la lista que se ve en la pantalla sin que yo tenga que recargar la página.

### d) Enlace del repositorio de GitHub
* [Repositorio del Proyecto](https://github.com/Aliverot/t3_act5_react)

### e) Enlace del proyecto desplegado en GitHub Pages
* [Aplicación en Vivo (GitHub Pages)](https://aliverot.github.io/t3_act5_react/)
