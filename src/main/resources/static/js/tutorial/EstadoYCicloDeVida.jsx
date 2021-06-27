// Estado y ciclo de vida

function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('pcv')
    );
}

setInterval(tick, 1000);

// Reusable

function Clock(props) {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
  
  function tick() {
    ReactDOM.render(
      <Clock date={new Date()} />,
      document.getElementById('root')
    );
  }
  
  setInterval(tick, 1000);

  ReactDOM.render(
    <Clock />,
    document.getElementById('pcv2')
  );

// Convertir una función en una clase
// Se puede convertir un componente de función 
// como Clock en una clase en cinco pasos:
// 1. Crear una clase ES6 con el mismo nombre que herede de 
// React.Component.
// 2. Agregar un único método vacío llamado render().
// 3. Mover el cuerpo de la función al método render().
// 4. Reemplazar props con this.props en el cuerpo de render().
// 5. Borrar el resto de la declaración de la función ya vacía.

class Clock2 extends React.Component {
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
  function tick() {
    ReactDOM.render(
      <Clock2 date={new Date()} />,
      document.getElementById('pcv3')
    );
  }
  
  setInterval(tick, 1000);