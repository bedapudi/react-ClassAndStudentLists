import React from 'react';

export default class ClassRow extends React.Component{
    constructor(props){
        super(props)
        this.state = {students: 0, pass: 0, fail: 0}
        
    }
    
    componentDidMount(){
        let passCount = 0;
        let {classObj} = this.props
        
        classObj.forEach((student)=>{
            if(student.Status == 'pass'){
                passCount = passCount + 1
            }
        })
        console.log("class", classObj)
        console.log("total students", classObj.length)
        console.log("pass students",passCount)
        console.log("failed students", classObj.length- passCount)
        this.setState({students:classObj.length, pass: passCount, fail: classObj.length- passCount})

    }

    render(){
        console.log("props", this.props)
        let {name, classDetails, classObj} = this.props
        let {students, pass, fail } = this.state
        return(<tr onClick={()=>classDetails(classObj)}>
            <td>{name}</td>
            <td>{students}</td>
            <td>{pass}</td>
            <td>{fail}</td>
        </tr>)
    }
}