import React,{ Component} from 'react'

class ErrorBoundary extends Component{

    constructor(props){
        super(props);
        this.state={hasError:false};
    }


static getDerivedStateFromError(){
    return {hasError:true};

};
  componentDidCatch(error, errorInfo) {
    // You can also log error to a service here
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  };
render(){
    if(this.state.hasError){
        return <h3>Something Went Wrong</h3>
    }
    return this.props.children;
   
}
}
export default ErrorBoundary;