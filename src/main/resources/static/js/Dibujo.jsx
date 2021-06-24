class Inicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            status: []
        };
        return this;
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.checkStatus(),
            10
        );
    }


    //codigo falta 
   
    checkStatus() {
        fetch("/getdibujo")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        status: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
        setdata(this.state.status)

        
        const datain = new FormData();
        datain.append('data', mouseDragged());
        fetch('/addData', {
            method: 'POST',
            body: datain
        }).then(function (response) {
            if (response.ok) {
                return response.text()
            } else {
                console.log("se intento");
                throw "Error";
            }
        });
    }
    render() {
        const {
            error,
            isLoaded,
            status
        } = this.state;
        if (error) {
            return <div> Error: {
                error.message
            } </div>;
        } else if (!isLoaded) {
            return <div> Loading... </div>;
        } else {
            return (
                <div>
                    <h1> The server status is: </h1>
                    <p> {status} </p>
                </div>
            );
        }
    }
}

ReactDOM.render(<
    Inicio />,
    document.getElementById('msgserver')
    
);