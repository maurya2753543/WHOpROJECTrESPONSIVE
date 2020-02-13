import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets   } from 'chart.js';
import { Label , Color } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-active-request',
  templateUrl: './active-request.component.html',
  styleUrls: ['./active-request.component.scss']
})

export class ActiveRequestComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{

          scaleLabel: {
              display: false

          },


          stacked: true
           }],

      yAxes: [{

          stacked: true

          }]
        },

        legend : {

            position : 'bottom',
            labels : {

              usePointStyle : true,
              boxWidth : 10

            }
        },

        plugins: {
          datalabels: {
           font: {
              size: 11,
            }
            ,
            color : '#FFFFFF',
            display: true,
         }

       }

  };

  public barChartLabels: Label[] = ['Recruitment of P Staff', 'Recruitment of G Staff', 'INP/GS/TGS Selections',
  'Consultant Proposals', 'TIP Sections', 'Classification of PDs'];
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  public barChartColors: Color[];
  public barChartData: ChartDataSets[] = [
      {
      data: [10, 20, 30, 40, 50, 60] ,
      label : 'Ongoing Request',
      backgroundColor : '#1AD09F' ,
      hoverBackgroundColor: '#18D09E',
       } ,

       { data: [24, 25 , 26,  27 , 28 , 25] ,
         label: 'Task Due To This Week',
         backgroundColor : '#65A2F5' ,
         hoverBackgroundColor: '#3681E8',

         },

            {    data: [40, 45, 36,  37 , 38 , 63] ,
                             label: 'Approching SLA',
                             backgroundColor : '#FEC519' ,
                             hoverBackgroundColor: '#FEC519',
             },
               {   data: [50, 55, 38,  49 , 86 , 85],
                            label: 'Task on Hold' ,
                            backgroundColor : '#FF6769' ,
                            hoverBackgroundColor: '#FE9B19',
                 },

           ];

  constructor() { }

  ngOnInit() {
  }

}
