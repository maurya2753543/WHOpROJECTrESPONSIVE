import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

import { Label , monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip , SingleDataSet , Color} from 'ng2-charts';
@Component({
  selector: 'app-status-wise',
  templateUrl: './status-wise.component.html',
  styleUrls: ['./status-wise.component.scss']
})
export class StatusWiseComponent implements OnInit {
    activeIndex = 0;
    Label: any;

  public pieChartOptions: ChartOptions = {
    responsive: true,

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

  public pieChartLabels: Label[] = ['Submit For Approval' , 'Active' , 'Requested'];
  public pieChartData: SingleDataSet = [19, 11, 19];
  public doughnutChartType: ChartType = 'doughnut';
  public pieChartLegend = false;
  public pieChartPlugins = [];
  public pieChartColors: Color[] = [
    { backgroundColor: [ '#65A2F5' ,  '#4ADAB3' , '#FF6769' ]}
  ];


  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();

  }

  ngOnInit() {
  }

}
