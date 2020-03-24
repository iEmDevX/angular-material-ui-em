import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { DialogAuthenComponent } from 'src/app/components/dialog-authen/dialog-authen.component';
import { CallDialogAhten } from 'src/app/components/dialog-authen/call-dialog-authen';
import { ScreenConfig } from 'src/app/config/screen-config';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnDestroy {

  mobileQuery: MediaQueryList;

  showFiller = false;
  private mobileQueryListener: () => void;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    public dialog: MatDialog,
    private callDAL: CallDialogAhten,
  ) {
    this.mobileQuery = this.media.matchMedia(`(max-width: ${ScreenConfig.widthMobile}px)`);
    this.mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    // tslint:disable: deprecation
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  openDialog(): void {
    this.callDAL.openDialog();
  }


}
