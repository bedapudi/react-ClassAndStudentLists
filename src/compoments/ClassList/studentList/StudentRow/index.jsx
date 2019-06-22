import React from 'react';

export default class StudentRow extends React.Component{
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
    }

    render(){
        console.log("props", this.props)
        let {student} = this.props
        return(<tr >
            <td>{student.Name}</td>
            <td>{student.Maths}</td>
            <td>{student.Science}</td>
            <td>{student.English}</td>
            <td>{student.Geography}</td>
            <td>{student.History}</td>
            <td>{student.Maths + student.Science + student.English + student.Geography + student.History}</td>
            <td>{student.Status}</td>
        </tr>)
    }
}