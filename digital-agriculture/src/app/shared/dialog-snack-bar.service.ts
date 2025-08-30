import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class DialogSnakBarService {
  constructor(private snackBar: MatSnackBar) { }

  public showMenssage(menssage: string){
    this.snackBar.open(menssage, '', {duration: 5000});
  }
}
