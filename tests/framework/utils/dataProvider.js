import fs from 'fs';
import {parse} from 'csv-parse-sync'

export class DataProvider{

    //function to read data from json file
    static getDataFromJson(filePath){
     let data  =  JSON.parse(fs.readFileSync(filePath,'utf8'))
     return data;
    }


    //function to read data from csv file
     static getDataFromCsv(filePath){
     let data  =  JSON.parse(fs.readFileSync(filePath,{columns:true,skip_empty_lines:true}))
     return data;
    }
}
