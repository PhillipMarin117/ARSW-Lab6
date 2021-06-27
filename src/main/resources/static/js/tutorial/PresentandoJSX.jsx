/*
// Insertando expresiones en JSX
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
    element,
    document.getElementById('pjsx')
);
*/
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

/*
const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

ReactDOM.render(
    element,
    document.getElementById('pjsx2')
);*/

// JSX también es una expresión (se puede usar declaraciones 
// condicional y ciclos, asignarlo a variables, aceptarlo 
// como argumento, y retornarlo desde dentro de funciones)
function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

const elementt = (
    <h1>
        {getGreeting(user)}
    </h1>
);

ReactDOM.render(
    elementt,
    document.getElementById('pjsx3')
);

// Puedes utilizar comillas para especificar strings literales
// como atributos:

const element2 = <div tabIndex="0"></div>;

// También puedes usar llaves para insertar una expresión 
// JavaScript en un atributo:

//const element3 = <img src={user.avatarUrl}></img>;

// Especificando hijos con JSX
// Se puede cerrar directamente como en XML
//const element4 = <img src={user.avatarUrl} />;

// Las etiquetas de Javascript pueden contener hijos
const element5 = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
);

// JSX previene ataques de inyección

//Es mas seguro ingresar datos propios del usuario desde JSX
//const title = response.potentiallyMaliciousInput;
// Esto es seguro:
//const element6 = <h1>{title}</h1>;

//JSX representa objetos
// Los dos son lo mismo
const element7 = (
    <h1 className="greeting">
        Hello, world!
    </h1>
);
// solo que este ayuda a evitar errores 
const element8 = React.createElement(
    'h1',
    { className: 'greeting' },
    'Hello, world!'
);

// En esencia es 
// Nota: Esta estructura está simplificada
const element9 = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello, world!'
    }
};