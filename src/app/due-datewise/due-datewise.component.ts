import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color } from 'ng2-charts';
@Component({
  selector: 'app-due-datewise',
  templateUrl: './due-datewise.component.html',
  styleUrls: ['./due-datewise.component.scss']
})
export class DueDatewiseComponent implements OnInit {

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
  activeIndex = 0;
  public pieChartLabels: Label[] = ['Task with 1 Due Days' , 'Task with 2 Due Days' , 'Task with 3 Due Days' , 'Task with 4 Due Days'];
  public pieChartData: SingleDataSet = [10, 19, 11, 7];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = false;
  public pieChartPlugins = [];
  public pieChartColors: Color[] = [
    { backgroundColor: [ '#FF4346' ,  '#FEC519' , '#4ADAB3', '#65A2F5']}
  ];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();

   }

  ngOnInit() {
  }

}
