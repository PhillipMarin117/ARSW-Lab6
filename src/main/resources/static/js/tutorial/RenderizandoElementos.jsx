// Renderizando elementos

//Renderizando un elemento en el DOM
//Un elemento describe lo que se quiere ver en la pantalla
const element = <h1>Hello, world</h1>;

// En un archivo HTML llamamos al nodo raiz, ya que todo 
// lo que esté dentro será manejado por React DOM
// <div id="re"></div> 
// id debe considir en ambos archivos 

const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('re'));

// Actualizando el elemento renderizado
// Los elementos de React son inmutables (no cambian)
// se puede actualizar con un "reloj"
function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('re2'));
}

setInterval(tick, 1000);

// React solo actualiza lo que es necesario
// React DOM compara el elemento y sus hijos con el elemento
// anterior, y solo aplica las actualizaciones del DOM que son 
// necesarias para que el DOM esté en el estado deseado.