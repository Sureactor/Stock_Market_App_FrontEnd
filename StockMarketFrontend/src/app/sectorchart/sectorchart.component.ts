import { Component, ViewChild ,OnInit} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import {comparemodel} from 'src/app/comparemodel';
import {sectormodel} from 'src/app/sectormodel';
import { FormGroup, FormControl } from '@angular/forms';
import { NgForm }   from '@angular/forms';
@Component({
  selector: 'app-sectorchart',
  templateUrl: './sectorchart.component.html',
  styleUrls: ['./sectorchart.component.css']
})
export class SectorchartComponent implements OnInit{
  emps = [];
  company=[];
  message1 = null;
  message2 = null;
  fetch;
  fetch2;
  @ViewChild('lineChart', {static: true}) private chartRef;
  chart: any;
  labels = [1,2,3,4,5];
  dataPoints= [20,15,15,33,20];
  company1Date=[];
  company1Price=[];
  company2Date=[];
  company2Price=[];
  company1Id;
  company2Id;
  company1name;
  company2name;
  cmpmodel =new comparemodel("rr","rrrrdd","","",new Date(),new Date());
  sectorobj = new sectormodel("","",new Date(),new Date());
 sectors=[];
 stockexchanges=[];
  companies=[];
  fetch3;
  //sectors = ["technology","pharma","automobile"];
  //sectorId=[1,2,3];
  sectorId;
  exchangeId;
  title: any;
  counter=0;
  message=null;
  @ViewChild('userForm') ngForm: NgForm;
  formChangesSubscription;
  regform =new FormGroup({
    sect:new FormControl(""),
    exchange:new FormControl(""),
    cmp1: new FormControl(""),
    cmp2 : new FormControl("")
  })
 constructor(private http:HttpClient){
  //this.createChart();
  /*
   this.fetch = this.http.get("http://dummy.restapiexample.com/api/v1/employees")
   .subscribe((res:any)=>{
     console.log(res);

     if(res.status=="success"){
       this.emps = res.data;
       this.message1 = null;
     } else {
       this.message1 = "Data not found";
     }
    })
  */
 this.fetch=this.http.get("http://localhost:8080/user/sectordetails")
 .subscribe((res:any)=>{
   console.log(res);
     res.forEach(element => {
       this.sectors.push(element.sectorId+ "-"+element.name);
     }
   )}
   )
   
        //this.message2 = "Data not found";  
 }
 /*
 myfunc()
 {
  this.sectorId=this.cmpmodel.sector.split("-",1)[0];
  this.exchangeId=this.cmpmodel.stockexchange.split("-",1)[0];
  console.log("inside myfun");
  this.fetch=this.http.get("http://localhost:8081/user/company/getbysectorexchange/"+this.sectorId+"/"+this.exchangeId)
  .subscribe((res:any)=>{
    console.log(res); 
    if(this.counter==0)
    this.counter=this.counter+1;
    else
    this.companies.splice(0,this.companies.length);
      res.forEach(element => {
        console.log("ddd"+this.counter); 

        this.companies.push(element.companyId+ "-"+element.name);
        
      }
    )}
    )
 }
 */
  fetchCompanyData(){
    var data;
    var i=0;
    this.fetch2 = this.http.get("http://localhost:8080/user/sector/stock/"+this.company1Id+"/"+this.sectorobj.from+"/"+this.sectorobj.to)
    .subscribe((res:any)=>{
      console.log(res);
        this.company = res;
        this.message2 = null;
        res.forEach(element => {
          this.company1Date[i]=element.date;
          this.company1Price[i]=element.closePrice;
          i=i+1;
        }
      )}
      )
      var j=0;
      this.fetch3 = this.http.get("http://localhost:8080/user/sector/stock/"+this.company2Id+"/"+this.sectorobj.from+"/"+this.sectorobj.to)

    .subscribe((res2:any)=>{
      console.log(res2);
        this.company = res2;
        this.message2 = null;
        res2.forEach(element => {
          this.company2Date[j]=element.date;
          this.company2Price[j]=element.closePrice;
          j=j+1;
        }
      )
      console.log(this.company2Price);
    }
      )
     
  }
  ngOnInit()
  {

  }
 func()
 {/*
  this.chart = new Chart('canvas2', {
    type: 'line',
    data: {
      labels: this.company1Date, // your labels array
      datasets: [
        {
          label:"company1",
          data: this.company1Price, // your data array
          borderColor: '#00AEFF',
          fill: true,
          lineTension	:0
        },
        {
          label:"company2",
          data: this.company2Price, // your data array
          borderColor: '#00AEFF',
          fill: true,
          lineTension	:0
        } 
       ]
    },
    options: {
      legend: {
        display: false ,
      },
      title:{
        display: true,
        text: "Company 1"
      },
      scales: {
        xAxes: [{
          display: true,
          
        }],
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              },
              scaleLabel: {
                   display: true,
                   labelString: 'Moola',
                   fontSize: 20 
                }
          }]            
      }  
    }
    }
  });
  */
 var data = {
  labels: this.company1Date,
  datasets: [{
      label: this.company1name,
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(225,0,0,0.4)",
      borderColor: "red", // The main line color
      borderCapStyle: 'square',
      borderDash: [], // try [5, 15] for instance
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "black",
      pointBackgroundColor: "white",
      pointBorderWidth: 1,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: "yellow",
      pointHoverBorderColor: "brown",
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
      // notice the gap in the data and the spanGaps: true
     // data: [65, 59, 80, 81, 56, 55, 40, ,60,55,30,78],
     data:this.company1Price,
      spanGaps: true,
    }, {
      label: this.company2name,
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(167,105,0,0.4)",
      borderColor: "blue",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "white",
      pointBackgroundColor: "black",
      pointBorderWidth: 1,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: "brown",
      pointHoverBorderColor: "yellow",
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
      // notice the gap in the data and the spanGaps: false
      //data: [10, 20, 60, 95, 64, 78, 90,,70,40,70,89],
      data:this.company2Price,
      spanGaps: false,
    } 
  ]
};

// Notice the scaleLabel at the same level as Ticks
var options = {
  scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                },
                scaleLabel: {
                     display: true,
                     labelString: 'Price',
                     fontSize: 20 
                  }
            }]            
        }  
};

// Chart declaration: 
this.chart = new Chart("canvas2", {
  type: 'line',
  data: data,
  options: options
});
}

onSubmit(){
   this.company1Id=this.sectorobj.sector1.split("-",1)[0];
   this.company1name=this.sectorobj.sector1;
   this.company2Id=this.sectorobj.sector2.split("-",1)[0];
   this.company2name=this.sectorobj.sector2 ;
  this.fetchCompanyData();
  this.func();
}

 ngOnDestroy(){
  this.fetch2.unsubscribe();
 }
}
