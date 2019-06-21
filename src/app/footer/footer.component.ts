import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  year: number = Date.now();

  constructor(public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(TcgdprDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'tcgdpr-dialog',
  templateUrl: 'tcgdpr-dialog.html',
})
export class TcgdprDialog {}
