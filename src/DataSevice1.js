import React, { Component } from 'react';
import App1 from './App1';
import axios from 'axios';

class DataService1{


retreieveShowAllRecords(){
    return axios.get('http://localhost:8080/showall')
}
}

export default new DataService1()