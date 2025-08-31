import { Component, OnInit } from '@angular/core';
import { FieldsService } from '../../fields.service';
import { catchError, Observable, of } from 'rxjs';
import { DialogSnakBarService } from '../../../shared/dialog-snack-bar.service';
import { PaginationResponse } from '../../../shared/model/response/PaginationResponse';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fields-dashboard',
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatPaginatorModule,

  ],
  templateUrl: './fields-dashboard.component.html',
  styleUrl: './fields-dashboard.component.css'
})
export class FieldsDashboardComponent implements OnInit {
  public fields$: Observable<PaginationResponse> | null = null ;
  public numberPage = 0;
  public lengthPage = 10;

  constructor(private fieldsServices: FieldsService, private snackBar: DialogSnakBarService,
      private router: Router, private activateRoute: ActivatedRoute, private paginatorIntl: MatPaginatorIntl){}

  ngOnInit(): void {
    this.paginatorIntl.itemsPerPageLabel = 'Itens por página:';
    this.paginatorIntl.changes.next();
    this.refresh();
  }

  public refresh(){
    this.fields$ = this.fieldsServices.getFieldsByUserLogged(this.numberPage, this.lengthPage).pipe(
      catchError(error => {
        this.snackBar.showMenssage(error.error);
        return of({elements: [], totalElements: 0, totalPages: 0});
      }),
    );
  }

  public onPage(pageEvent: PageEvent = {pageIndex: 0, pageSize: 10, length: 0 }){
    this.numberPage = pageEvent.pageIndex;
    this.lengthPage = pageEvent.pageSize;

    this.refresh();
  }

  public clickNewField(){
    this.router.navigate(['novo'], {relativeTo: this.activateRoute});
  }

  public clickDetails(fieldId: number){
    this.router.navigate(['detalhes', fieldId], {relativeTo: this.activateRoute});
  }

  public clickLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }

}
