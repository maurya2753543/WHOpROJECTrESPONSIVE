import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manu',
  templateUrl: './manu.component.html',
  styleUrls: ['./manu.component.scss']
})
export class ManuComponent implements OnInit {
    activeIndex = 0;
    menus: any;
  constructor() {

       this.menus = [ { id : 0  , name  : 'Classification of PDs'  ,   Image: 'assets/images/classification-icon.svg'       },
                      { id : 1  , name  : 'TIP Selections'         ,   Image : 'assets/images/tip-selection-icon.svg'       },
                      { id : 3   , name : 'Consultant Proposals'   ,   Image: 'assets/images/consultant-proposals-icon.svg' },
                      { id : 4   , name : 'TNP/GS/TGS Selections'  ,   Image: 'assets/images/tnp-selection.svg'             },
                      { id : 5   , name : 'Recruitment of G Staff' ,   Image: 'assets/images/g-staff-icon.svg'              },
                      { id : 6   , name : 'Recruitment of P Staff' ,   Image: 'assets/images/p-staff-icon.svg'              }

       ];


  }

  activateTab(tabId) {
    this.activeIndex = tabId;
  }

  ngOnInit() {

  }

}
