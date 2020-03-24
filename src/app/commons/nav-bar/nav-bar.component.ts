import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnDestroy {

  mobileQuery: MediaQueryList;

  // listMenu: ListMenu[] = [
  //   { icon: 'test1', text: 'test' },
  //   { icon: 'test2', text: 'test' },
  //   { icon: 'test3', text: 'test' },
  //   { icon: 'test4', text: 'test' },
  //   { icon: 'test5', text: 'test' },
  //   { icon: 'test6', text: 'test' },
  //   { icon: 'test7', text: 'test' },
  //   { icon: 'test8', text: 'test' },
  //   { icon: 'test9', text: 'test' },
  //   { icon: 'test6', text: 'test' },
  //   { icon: 'test7', text: 'test' },
  //   { icon: 'test8', text: 'test' },
  //   { icon: 'test9', text: 'test' },
  //   { icon: 'test6', text: 'test' },
  //   { icon: 'test7', text: 'test' },
  //   { icon: 'test8', text: 'test' },
  //   { icon: 'test9', text: 'test' },
  // ];

  showFiller = false;
  private mobileQueryListener: () => void;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
  ) {
    this.mobileQuery = this.media.matchMedia('(max-width: 800px)');
    this.mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    // tslint:disable: deprecation
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

}
