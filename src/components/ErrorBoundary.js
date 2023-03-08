import React from "react";
// import Component from "./Component";
class ErrorBoundary extends React.Component {
  constructor(){
    super();
    this.state={
      hasError:false
    };
  }

  componentDidCatch(error, errorInfo){
    this.setState({
      hasError:true
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <p id="error">
          this is an error
        </p>
      );
    }
    return <>
    {this.props.children}
    {/* <p>this is not done yet</p> */}
    </>;
  }
}
export default ErrorBoundary;
