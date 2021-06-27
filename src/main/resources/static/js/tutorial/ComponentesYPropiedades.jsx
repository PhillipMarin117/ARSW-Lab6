// Componentes y propiedades

// Componentes funcionales y de clase
// La forma más sencilla de definir un componente es
// escribir una función de JavaScript (propiedades props
// componentes de la funcion)

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

class Welcome2 extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

// Renderizando un componente
// en este caso props corresponde a elemento 3, que 
// cumple como si fuera la entrada de un usuario
// <funcion atributo=valorAtrivuto>
// 1. Llamamos a ReactDOM.render() con el elemento <Welcome name="Sara" />.
// 2. React llama al componente Welcome con {name: 'Sara'} como “props”.
// 3. Nuestro componente Welcome devuelve un elemento <h1>Hello, Sara</h1> 
// como resultado.
// 4. React DOM actualiza eficientemente el DOM para que coincida con <h1>Hello, Sara</h1>.
const element = <Welcome3 name="Sara" />;

function Welcome3(props) {
    return <h1>Hello, {props.name}</h1>;
}

const element2 = <Welcome name="Sara" />;
ReactDOM.render(
    element2,
    document.getElementById('cyp')
);

// Composición de componentes
function Welcome4(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('cyp2')
);

// Extracción de componentes (dividir)
// acepta objetos, texto y fecha como props 
// y describe un comentario en una web de redes sociales.

/*function formatDate(date) {
    return date.toLocaleDateString();
  }
  
  function Comment(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img
            className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
          />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }
  
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };
  ReactDOM.render(
    <Comment
      date={comment.date}
      text={comment.text}
      author={comment.author}
    />,
    document.getElementById('cyp3')
  );
  */

// por partes 
function formatDate(date) {
    return date.toLocaleDateString();
  }
  
  function Avatar(props) {
    return (
      <img
        className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
    );
  }
  
  function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">{props.user.name}</div>
      </div>
    );
  }
  
  function Comment2(props) {
    return (
      <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }
  
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };
  ReactDOM.render(
    <Comment
      date={comment.date}
      text={comment.text}
      author={comment.author}
    />,
    document.getElementById('cyp4')
  );
  
// Las props son de solo lectura

// pura
function sum(a, b) {
    return a + b;
  }

// inpura
function withdraw(account, amount) {
    account.total -= amount;
  }

// Todos los componentes de React deben actuar 
// como funciones puras con respecto a sus props.