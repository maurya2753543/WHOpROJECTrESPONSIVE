import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Sort, MatSort} from '@angular/material/sort';
export interface PeriodicElement {
  requestedBy: any;
  date: string;
  task: string;
  duedate: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {
   requestedBy: {
        name : 'FIN/DAF',
        image : 'assets/images/user-avatar1.svg'
    },
    date : '28 nov 2019',

    task:  'Review by HRM ',

     duedate: 1

  },
  {
    requestedBy: {
         name : 'RAHUL KUMAR',
         image : 'assets/images/user-avatar1.svg'
     },
     date : '24 nov 2019',

     task:  'Review by HRM ',

      duedate: 1

   },
   {
    requestedBy: {
         name : 'VIVEK GUAR',
         image : 'assets/images/user-avatar1.svg'
     },
     date : '25 nov 2019',

     task:  'Approval Document ',

      duedate: 1

   },
   {
    requestedBy: {
         name : 'RAJIV KUMAR',
         image : 'assets/images/user-avatar1.svg'
     },
     date : '28 nov 2019',

     task:  'Review and Approval ',

      duedate: 1

   },
   {
    requestedBy: {
         name : 'HSD/HSD',
         image : 'assets/images/user-avatar1.svg'
     },
     date : '31 dec 2019',

     task:  'Intiate A ',

      duedate: 5

   }];


@Component({
  selector: 'app-upcoming-task',
  templateUrl: './upcoming-task.component.html',
  styleUrls: ['./upcoming-task.component.scss']
})


export class UpcomingTaskComponent implements OnInit {
  displayedColumns: string[] = ['requestedBy', 'date', 'task' , 'duedate'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort, {static: true}) sort: MatSort;


   constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
