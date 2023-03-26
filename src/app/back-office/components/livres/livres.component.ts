import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Livre } from 'src/app/shared/models/LivreModel';
import { CrudService } from 'src/app/shared/services/crudService/crud.service';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css'],
})
export class LivresComponent implements OnInit {
  displayedColumns: string[] = ['#','titre', 'prix', 'nbExemplaires', 'nbPages'];
  livres: Livre[] = [];
  obs!: Observable<any[]>;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);

  constructor(private crudService: CrudService, private changeDetectorRef: ChangeDetectorRef,) {}

  ngOnInit(): void {
    this.crudService.getAll('/livre').subscribe((data: Livre[]) => {
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
