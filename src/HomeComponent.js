import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import DataService1 from "./DataService1.js"


class HomeComponent extends Component {

addPerson(){
let person = {};

let name1 = document.getElementById("name").value;
let address1 = document.getElementById("address").value;

person["name"] = name1;
person["address"] = address1;
        console.log(person)
        DataService1.addRecord(person)
}


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
                
                <input id = "name" ref = "name" type="text"/>Name
                <input id = "address" type="text"/>Address
                
            
                <button className="btn btn-warning" onClick={(e)=>{
                      this.addPerson() 
                        
                      }}> Add Record </button>
                
                <table className="table">
                <tbody>
                    {/* {console.log(this.state.records)} */}
                       {
                        
                        this.state.records.map((record, i) => {
                            return (
                                   
                                <tr key={"A" + i}>
                                    <td>{record.regNo}</td>
                                    <td>{record.name}</td>
                                    <td>{record.address}</td>
                                    
                                    
                                    <td><button className="btn btn-warning" onClick={(e)=>{
                                      

                                       DataService1.deleteRecord(record.regNo)}}> Delete </button> 

                                    <button className ="btn btn-warning" onClick={(e)=>{
                                       DataService1.updateRecord(record.regNo)}}> Update</button> </td>

                                    
                                </tr>
                                

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

export default HomeComponent