import React from 'react';
import './App.css';
import ClassList from './ClassList'

export default class App extends React.Component{
  constructor(props){
    super(props)
  }

  render (){
    return (
      <div className="App">
        <ClassList/>
      </div>
    )
  }
}