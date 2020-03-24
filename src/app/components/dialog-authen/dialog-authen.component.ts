import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faFacebookF, faGoogle, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { FormControl, Validators } from '@angular/forms';
import { MediaMatcher } from '@angular/cdk/layout';
import { ScreenConfig } from 'src/app/config/screen-config';

@Component({
  selector: 'app-dialog-authen',
  templateUrl: './dialog-authen.component.html',
  styleUrls: ['./dialog-authen.component.scss']
})
export class DialogAuthenComponent {
  dataThis: any;

  facebook = faFacebookF;
  google = faGoogle;
  github = faGithubAlt;
  mdq: MediaQueryList;

  email = new FormControl('', [Validators.required, Validators.minLength(4)]);

  constructor(
    public dialogRef: MatDialogRef<DialogAuthenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private media: MediaMatcher,
  ) {
    this.dataThis = data;
    this.mdq = this.media.matchMedia(`(max-width: ${ScreenConfig.widthMobile}px)`);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    } else if (this.email.hasError('minlength')) {
      return 'You must enter value min length 4';
    }
  }
}
