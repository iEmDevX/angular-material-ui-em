import { Component, OnInit, Inject } from '@angular/core';
import { AjaxService } from 'src/app/services/ajax.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  animal: string;
  name: string;

  mdq: MediaQueryList;

  dataRes: any;
  constructor(
    private ajax: AjaxService,
    public dialog: MatDialog,
  ) {
    this.getData();
  }

  async  getData() {
    this.dataRes = await this.ajax.get('https://jsonplaceholder.typicode.com/posts');
  }

  ngOnInit(): void {
  }

}

