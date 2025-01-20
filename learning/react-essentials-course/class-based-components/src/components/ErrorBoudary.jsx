import {Component} from "react";

class ErrorBoudary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return (<p>Something went wrong</p>);
        }
        else {
            return this.props.children;
        }
    }
}

export default ErrorBoudary;