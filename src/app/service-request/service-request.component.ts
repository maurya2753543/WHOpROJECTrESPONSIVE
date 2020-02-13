import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Sort, MatSort} from '@angular/material/sort';

export interface PeriodicElement {
  requestedBy: any;
  date: string;
  assignedTo: any;
  live: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    requestedBy: {
        name : 'FIN/DAF',
        image : 'assets/images/user-avatar1.svg'
    },
    date : '28 nov 2019',
    assignedTo: {
        name : 'Vivek Guar',
        image : 'assets/images/user-avatar2.svg'
    },
    live: 'progress'
  },
  {
    requestedBy: {
        name : 'HSD/HSD',
        image : 'assets/images/user-avatar1.svg'
    },
    date : '14 nov 2019',
    assignedTo: {
        name : 'Abhishek',
        image : 'assets/images/user-avatar3.svg'
    },
    live: 'inprogress'
  },
  {
    requestedBy: {
        name : 'FIN/DAF',
        image : 'assets/images/user-avatar1.svg'
    },
    date : '30 Dec 2019',
    assignedTo: {
        name : 'Likhnarayan',
        image : 'assets/images/user-avatar2.svg'
    },
    live: 'cancelled'
  },
  {
    requestedBy: {
        name : 'VIVEK GUAR',
        image : 'assets/images/user-avatar1.svg'
    },
    date : '01 jan 2020',
    assignedTo: {
        name : 'Neeraj Maurya',
        image : 'assets/images/user-avatar3.svg'
    },
    live: 'waiting'
  },
  {
    requestedBy: {
        name : 'Neeraj Maurya',
        image : 'assets/images/user-avatar1.svg'
    },
    date : '28 jan 2020',
    assignedTo: {
        name : 'Vivek Guar',
        image : 'assets/images/user-avatar2.svg'
    },
    live: 'NewRequest'
  }
];



@Component({
  selector: 'app-service-request',
  templateUrl: './service-request.component.html',
  styleUrls: ['./service-request.component.scss']
})

export class ServiceRequestComponent implements OnInit {
  displayedColumns: string[] = ['requestedBy', 'date', 'assignedTo', 'live'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor() {

  }


  ngOnInit() {

  this.dataSource.sort = this.sort;
  }

}
