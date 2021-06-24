class StatusComponents extends React.Components{
    constructor (props)
    super (props)
    this.state = {
    error: null,
    isLoader: false,
    tatus: ""
    };

    componentDidMount() {
            this.timerID = setInterval(
                () => this.checkStatus(),
                5000
            );
        }

}
