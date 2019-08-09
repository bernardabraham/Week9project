import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import DataService1 from "./DataService1.js"


class AddComponent extends Component {


    constructor(){
        super();
        this.state={
            records:[]
        }
    }
    render() {
        let Promise = DataService1.retrieveShowAllRecords();
        Promise.then(response => {
            this.setState({
                records: response.data
            })
            // console.log(this.state.records)
        })


        return (
            
            <div>
               
                <Router>
                    <Route path="/" Component={HomeComponent} />
                </Router>
                
                <input type="text"/>Name
                <input type="text"/>Address
                        
                        this.state.records.map((record, i) => {
                            return (

                                    <td>
                                    <button className="btn btn-warning" onClick={()=>{
                                    this.addRecord(record.regno)}}> Add Record </button>
                                    </td>
                                    
                            
                                

                            )
                        }
                        )
                    }
                    </tbody>
            </table>
           
            </div >
        );

    }
}

export default AddComponent