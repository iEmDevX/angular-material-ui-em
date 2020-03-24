import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { DialogAuthenComponent } from './dialog-authen.component';
import { Injectable } from '@angular/core';

@Injectable()
export class CallDialogAhten {

  mobileQuery: MediaQueryList;

  constructor(
    private media: MediaMatcher,
    public dialog: MatDialog,
  ) { }

  openDialog(): void {
    this.mobileQuery = this.media.matchMedia('(max-width: 800px)');
    this.dialog
      .open(DialogAuthenComponent, {
        width: this.mobileQuery.matches ? '90%' : '35%',
        data: {}
      })
      .afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
  }
}
