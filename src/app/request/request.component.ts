import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss'],

})
export class RequestComponent implements OnInit {

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
  public pieChartLabels: Label[] = ['Submit For Approval' , 'Active' , 'Approved' , 'Requested'];
  public pieChartData: SingleDataSet = [6, 21, 11, 7];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = false;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors: Color[] = [
    { backgroundColor: [ '#65A2F5' ,  '#4ADAB3' , '#3164FA', '#FF6769'  ]}
  ];

  constructor() {
     monkeyPatchChartJsTooltip();
     monkeyPatchChartJsLegend();
  }


  ngOnInit() {
  }

}
