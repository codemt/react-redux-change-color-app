import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { changeColor } from './actions/changeColorActions'
class App extends Component{

  state = {

    color: ''

  }

  onHandleInputChange = (e) => {

      const color = e.target.value
      this.setState({

        color: color

      })
      console.log(this.state)

  }

  updateColor = (e) => {

    e.preventDefault()
    const color = this.state.color;
    this.props.changeColor(color)

  }
  render(){
    console.log(this.props)

    const DivStyles = {

      position:'fixed',
      width:`50%`,
      top:`30%`,
      left:`30%`,
      marginTop:`-100px`,
      marginLeft:`-100px`,
      backgroundColor:this.props.data,
      border:'1px solid red',
      height:`50%`
  
  }
    return (
      <div className="App">
          <div style={DivStyles}>
          
          </div>
          <div style={formStyles}>
          <input onChange={this.onHandleInputChange} id ="color" type="text" />
          <button onClick={this.updateColor}> change Color </button>
          </div>
      </div>
    );    
  }
}

const formStyles = {

  position:'absolute',
  top:`85%`,
  left:`50%`,
  marginTop:`-100px`,
  marginLeft:`-100px`,
  width:'100px',
  height:'50px'
 



}
const MapStateToProps = (state) =>({

  data : state.data.color

})
const MapDispatchToProps = {

  changeColor : changeColor

}

export default connect(MapStateToProps,MapDispatchToProps)(App);
