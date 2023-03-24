import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { CrudService } from 'src/app/shared/services/crudService/crud.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css'],
})
export class LivresComponent implements OnInit {
  displayedColumns: string[] = ['#','titre', 'prix', 'nbExemplaires', 'nbPages'];
  livres: any = [];
  obs!: Observable<any[]>;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);

  constructor(private crudService: CrudService, private changeDetectorRef: ChangeDetectorRef,) {}

  ngOnInit(): void {
    this.crudService.getAll('/livre').subscribe((data) => {
      this.livres = data;
      this.dataSource.data = this.livres;
      this.changeDetectorRef.detectChanges();
      this.obs = this.dataSource.connect();
    });
  }

  deleteBook(isbn: number) {
    this.crudService.delete('/livre', isbn).subscribe(() => {});
    this.changeDetectorRef.detectChanges();
  }
}
