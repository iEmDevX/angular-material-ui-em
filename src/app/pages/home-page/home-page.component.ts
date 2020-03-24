import { Component, OnInit, Inject } from '@angular/core';
import { AjaxService } from 'src/app/services/ajax.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogAuthenComponent } from 'src/app/components/dialog-authen/dialog-authen.component';
import { MediaMatcher } from '@angular/cdk/layout';


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
    private media: MediaMatcher,
  ) {
    this.getData();
  }

  async  getData() {
    this.dataRes = await this.ajax.get('https://jsonplaceholder.typicode.com/posts');
  }

  ngOnInit(): void {
  }


  openDialog(): void {
    this.mdq = this.media.matchMedia('(max-width: 800px)');
    this.dialog
      .open(DialogAuthenComponent, {
        width: this.mdq.matches ? '90%' : '35%',
        data: { name: this.name, animal: this.animal }
      })
      .afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.animal = result;
      });
  }

}

