import React,{Component} from 'react';
import'./App.css'
import DisplayProgress from './DisplayProgress.js'
import Slider from './Slider.js'
class App extends Component {
  constructor(){
    super();
    this.state={
      value:0
    }
  }

  setValue(newValue){
    this.setState({
      value: newValue
    })

  }
  
  render(){
    return(
      <div className = "App">
      <h1>React Progress Bar</h1>
      <DisplayProgress value ={this.state.value}/>
      <Slider value = {this.state.value}
      setValue = {this.setValue.bind(this)}/>
      </div>
    )
  
  
  }
}

export default App;
