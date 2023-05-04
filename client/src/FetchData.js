import React, {Component} from 'react';

class FetchData extends Component {

    constructor(props){
      super(props);
      this.state = {
        data: [],
      }
    }

    componentDidMount() {
      fetch('http://localhost:8080/', {method:'POST'})
      .then(res => res.json())
      .then(findResponse => {
        this.setState({
          data: findResponse,
        })
      });
    }
    
    render() {
      return(
        <ul>
          {/* {this.state.data.map((id, i) => <li key={i}>{id.department}</li>)} */}
          {/* {console.log(this.state.data)} */}
          {/* <ul>{this.state.data.map((item, i) => <li key={i}>{item.salary}</li>)} </ul> */}
        </ul>
      )
       
    }

}

export default FetchData;
