import axios from 'axios';

class DataService1{


retrieveShowAllRecords(){
    return axios.get('http://localhost:8080/showall')
}
deleteRecord(regNo){
    return axios.get('http://localhost:8080/delete/' + regNo) 
}
updateRecord(regNo){
    return axios.get('http://localhost:8080/update'+ regNo)
}
addRecord(person){
    return axios.post('http://localhost:8080/addrecord', person)
}
}

export default new DataService1()