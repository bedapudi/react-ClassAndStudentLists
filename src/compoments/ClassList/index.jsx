import React from 'react';
import ClassRow from './ClassRow'
import StudentList from './studentList'
export default class ClassList extends React.Component{
    constructor(props){
        super(props)
        this.state = {  classList: {}, 
                        headerFields: ["Class", "Students", "Pass", "Fail"], 
                        showClassDetails: false, 
                        selectedClass: [],
                        studentHeaderFields: ["Name", "Maths", "Science", "English", "Geography", "History", "total", "Status"]}
    }

    componentDidMount(){
        let classData = {
                "Class1": [
                    {
                            'Name': 'Tony',
                            'Maths': 80,
                            'Science': 50,
                                'English': 80,
                                'Geography': 70,
                                'History': 50,
                                'Status': 'pass'
                            },
                            {
                                'Name': 'Greg',
                                'Maths': 45,
                                'Science': 35,
                                'English': 20,
                                'Geography': 75,
                                'History': 23,
                                'Status': 'fail'
                            },
                            {
                                'Name': 'Greg2',
                                'Maths': 45,
                                'Science': 35,
                                'English': 20,
                                'Geography': 75,
                                'History': 23,
                                'Status': 'fail'
                            },
                            {
                                'Name': 'Greg3',
                                'Maths': 45,
                                'Science': 35,
                                'English': 20,
                                'Geography': 75,
                                'History': 23,
                                'Status': 'fail'
                            },
                            {
                                'Name': 'Greg4',
                                'Maths': 45,
                                'Science': 35,
                                'English': 20,
                                'Geography': 75,
                                'History': 23,
                                'Status': 'fail'
                            },
                            {
                                'Name': 'Greg5',
                                'Maths': 45,
                                'Science': 35,
                                'English': 20,
                                'Geography': 75,
                                'History': 23,
                                'Status': 'fail'
                            },{
                                'Name': 'Greg6',
                                'Maths': 45,
                                'Science': 35,
                                'English': 20,
                                'Geography': 75,
                                'History': 23,
                                'Status': 'fail'
                            },
                            {
                                'Name': 'Greg7',
                                'Maths': 45,
                                'Science': 35,
                                'English': 20,
                                'Geography': 75,
                                'History': 23,
                                'Status': 'fail'
                            },
                            {
                                'Name': 'Greg8',
                                'Maths': 45,
                                'Science': 35,
                                'English': 20,
                                'Geography': 75,
                                'History': 23,
                                'Status': 'fail'
                            },
                            {
                                'Name': 'Greg9',
                                'Maths': 45,
                                'Science': 35,
                                'English': 20,
                                'Geography': 75,
                                'History': 23,
                                'Status': 'fail'
                            },
                            {
                                'Name': 'Greg10',
                                'Maths': 45,
                                'Science': 35,
                                'English': 20,
                                'Geography': 75,
                                'History': 23,
                                'Status': 'fail'
                            }
                            ],
                "Class2":[
                    {
                        'Name': 'Adam',
                        'Maths': 55,
                        'Science': 26,
                            'English': 45,
                            'Geography': 78,
                            'History': 54,
                            'Status': 'fail'
                    }
                ],
                "Class3":[
                    {
                        'Name': 'Adam',
                        'Maths': 55,
                        'Science': 26,
                            'English': 45,
                            'Geography': 78,
                            'History': 54,
                            'Status': 'fail'
                    }
                ],
                "Class4":[
                    {
                        'Name': 'Adam',
                        'Maths': 55,
                        'Science': 26,
                            'English': 45,
                            'Geography': 78,
                            'History': 54,
                            'Status': 'fail'
                    }
                ],
                "Class5":[
                    {
                        'Name': 'Adam2',
                        'Maths': 55,
                        'Science': 27,
                            'English': 45,
                            'Geography': 78,
                            'History': 54,
                            'Status': 'fail'
                    }
                ],
                "Class6":[
                    {
                        'Name': 'Adam3',
                        'Maths': 55,
                        'Science': 26,
                            'English': 45,
                            'Geography': 77,
                            'History': 54,
                            'Status': 'fail'
                    }
                ],
                "Class7":[
                    {
                        'Name': 'Adam4',
                        'Maths': 55,
                        'Science': 26,
                            'English': 45,
                            'Geography': 78,
                            'History': 54,
                            'Status': 'fail'
                    }
                ],
                "Class8":[
                    {
                        'Name': 'Adam5',
                        'Maths': 55,
                        'Science': 26,
                            'English': 45,
                            'Geography': 78,
                            'History': 54,
                            'Status': 'fail'
                    }
                ],
                "Class9":[
                    {
                        'Name': 'Adam6',
                        'Maths': 55,
                        'Science': 26,
                            'English': 45,
                            'Geography': 78,
                            'History': 54,
                            'Status': 'fail'
                    }
                ],
                "Class10":[
                    {
                        'Name': 'Adam7',
                        'Maths': 55,
                        'Science': 26,
                            'English': 45,
                            'Geography': 78,
                            'History': 54,
                            'Status': 'fail'
                    }
                ],
                "Class11":[
                    {
                        'Name': 'Adam8',
                        'Maths': 55,
                        'Science': 26,
                            'English': 45,
                            'Geography': 78,
                            'History': 54,
                            'Status': 'fail'
                    }
                ]
                }
        this.setState({"classList": classData})
    }

    showClassDetailView = (classObj)=>{
        this.setState({showClassDetails: true, selectedClass:classObj})
    }

    render(){
        let { classList, headerFields, showClassDetails, studentHeaderFields, selectedClass } = this.state
        const classRows = Object.keys(classList).map(key => 
            <ClassRow 
                name={key} 
                classObj= {classList[key]}
                classDetails= {this.showClassDetailView}
            />
        )
        return(
            <div>
                <table>
                    <thead>
                        <tr className="header">
                        {
                        headerFields.map(field => {
                            return <td>{field}</td>
                        })
                        }
                        </tr>
                    </thead>
                    <tbody>
                    {classRows}
                    </tbody>

                </table>
                {showClassDetails && 
                <StudentList students={selectedClass}/>
                }
            </div>
        )
    }
}