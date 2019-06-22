import React from 'react';
import StudentRow from './StudentRow'
export default class studentList extends React.Component{
    constructor(props){
        super(props)
        this.state = {  
                        studentHeaderFields: ["Name", "Maths", "Science", "English", "Geography", "History", "total", "Status"]
                    }
    }
    render(){
        let {studentHeaderFields} = this.state
        let {students} = this.props
        let studentRows = students.map(student =>
            <StudentRow
                student={student}
            />
        )
        return(
            <table>
                <thead>
                    <tr className="header">
                    {
                    studentHeaderFields.map(field => {
                        return <td>{field}</td>
                    })
                    }
                    </tr>
                </thead>
                <tbody>
                    {studentRows}
                </tbody>
            </table>
        )
    }
}