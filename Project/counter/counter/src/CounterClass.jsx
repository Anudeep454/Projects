import React ,{ Component } from 'react';

export class CounterClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0, //initialization
        }
    }
        incr = () => {
            this.setState({count:this.state.count+1})
          }
        
        decr = () => {
            this.setState({count:this.state.count-1})
          };
        
        reset = () => {
            this.setState({ count: 0 });
          }
    

    render(){
        return(
            <div>
                <p>CounterClass{this.state.count}</p>
                <button onClick={this.incr}>Increase</button>
                <button onClick={this.decr}>Decrease</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}