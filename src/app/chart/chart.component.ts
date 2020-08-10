import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js';
import { HttpClient } from '@angular/common/http';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  id: any;

  details:any=[];
  item: []=[];

  constructor( private cahrtservice:ShopService,private route:ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    
this.details=JSON.parse(localStorage.getItem("productsDetail"))

this.route.params.subscribe(param =>{
  this.item=this.details.find(resp=>resp.Id == param.id)
  console.log("hh",this.item['Id'])  
})




  //  this.cahrtservice.getForcast().subscribe(resp=>
  //   console.log(resp));

// var myChart = new Chart("chart", {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });
  }

  show(){
    this.toastr.success("Hello, I'm the toastr message.")
  }
}
