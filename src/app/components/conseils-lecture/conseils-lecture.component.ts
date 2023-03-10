import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, map, Observable, startWith } from 'rxjs';
import { CrudService } from 'src/app/services/crudService/crud.service';
import { ProduitService } from 'src/app/services/produitService/produit.service';
import { UtilsService } from 'src/app/services/utilsService/utils.service';

// sera enlever quand on aura de vraies data
const DATA: any[] = [
  {
    isbn: 1,
    titre: 'Shiba Inu 1',
    photosLivre: ['https://picsum.photos/200', 'https://picsum.photos/200'],
    auteur: 'Dog Breed',
    resume:
      'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    prix: 15,
    editeur: 'editeur',
    commentairesUtilsateur: [{ note: 2, commentaire: "super" }, { note: 5, commentaire: "super" }, { note: 3, commentaire: "super" }],
    libraireCom: 'excellent livre',
    categorieLivre: 'enfant',
    poids: "142",
    longueur: "12",
    largeur: "12",
    epaisseur: "2",
    etatStock: {
      etat: 'En stock',
    },
    langue: {
      langue: 'Français',
    },
    collection: {
      nom: 'Gallimard',
    }
  },
  {
    isbn: 2,
    titre: 'Shiba Inu 2',
    photosLivre: ['https://picsum.photos/200', 'https://picsum.photos/200'],
    auteur: 'Dog Breed',
    resume:
      'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    prix: 15,
    editeur: 'editeur',
    commentairesUtilsateur: [{ note: 1, commentaire: "super" }, { note: 2, commentaire: "super" }, { note: 3, commentaire: "super" }],
    libraireCom: 'excellent livre',
    categorieLivre: 'enfant',
    poids: "142",
    longueur: "12",
    largeur: "12",
    epaisseur: "2",
    etatStock: {
      etat: 'En stock',
    },
    langue: {
      langue: 'Français',
    },
    collection: {
      nom: 'Gallimard',
    }
  },
  {
    isbn: 3,
    titre: 'Shiba Inu 3',
    photosLivre: ['https://picsum.photos/200', 'https://picsum.photos/200'],
    auteur: 'Dog Breed',
    resume:
      'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    prix: 15,
    editeur: 'editeur',
    commentairesUtilsateur: [{ note: 3, commentaire: "super" }, { note: 4, commentaire: "super" }, { note: 3, commentaire: "super" }],
    libraireCom: 'excellent livre',
    categorieLivre: 'ados',
    poids: "142",
    longueur: "12",
    largeur: "12",
    epaisseur: "2",
    etatStock: {
      etat: 'En stock',
    },
    langue: {
      langue: 'Français',
    },
    collection: {
      nom: 'Gallimard',
    }
  },
  {
    isbn: 4,
    titre: 'Shiba Inu 4',
    photosLivre: ['https://picsum.photos/200', 'https://picsum.photos/200'],
    auteur: 'Dog Breed',
    resume:
      'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    prix: 15,
    editeur: 'editeur',
    commentairesUtilsateur: [{ note: 4, commentaire: "super" }, { note: 5, commentaire: "super" }, { note: 3, commentaire: "super" }],
    libraireCom: 'excellent livre',
    categorieLivre: 'ados',
    poids: "142",
    longueur: "12",
    largeur: "12",
    epaisseur: "2",
    etatStock: {
      etat: 'En stock',
    },
    langue: {
      langue: 'Français',
    },
    collection: {
      nom: 'Gallimard',
    }
  },
  {
    isbn: 5,
    titre: 'Shiba Inu 5',
    photosLivre: ['https://picsum.photos/200', 'https://picsum.photos/200'],
    auteur: 'Dog Breed',
    resume:
      'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    prix: 15,
    editeur: 'editeur',
    commentairesUtilsateur: [{ note: 4, commentaire: "super" }, { note: 5, commentaire: "super" }, { note: 3, commentaire: "super" }],
    libraireCom: 'excellent livre',
    categorieLivre: 'ados',
    poids: "142",
    longueur: "12",
    largeur: "12",
    epaisseur: "2",
    etatStock: {
      etat: 'En stock',
    },
    langue: {
      langue: 'Français',
    },
    collection: {
      nom: 'Gallimard',
    }
  },
  {
    isbn: 6,
    titre: 'Shiba Inu 6',
    photosLivre: ['https://picsum.photos/200', 'https://picsum.photos/200'],
    auteur: 'Dog Breed',
    resume:
      'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    prix: 15,
    editeur: 'editeur',
    commentairesUtilsateur: [{ note: 4, commentaire: "super" }, { note: 5, commentaire: "super" }, { note: 3, commentaire: "super" }],
    libraireCom: 'excellent livre',
    categorieLivre: 'ados',
    poids: "142",
    longueur: "12",
    largeur: "12",
    epaisseur: "2",
    etatStock: {
      etat: 'En stock',
    },
    langue: {
      langue: 'Français',
    },
    collection: {
      nom: 'Gallimard',
    }
  },
  {
    isbn: 7,
    titre: 'Shiba Inu 7',
    photosLivre: ['https://picsum.photos/200', 'https://picsum.photos/200'],
    auteur: 'Dog Breed',
    resume:
      'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    prix: 15,
    editeur: 'editeur',
    commentairesUtilsateur: [{ note: 4, commentaire: "super" }, { note: 5, commentaire: "super" }, { note: 3, commentaire: "super" }],
    libraireCom: 'excellent livre',
    categorieLivre: 'adulte',
    poids: "142",
    longueur: "12",
    largeur: "12",
    epaisseur: "2",
    etatStock: {
      etat: 'En stock',
    },
    langue: {
      langue: 'Français',
    },
    collection: {
      nom: 'Gallimard',
    }
  },
  {
    isbn: 8,
    titre: 'Shiba Inu 8',
    photosLivre: ['https://picsum.photos/200', 'https://picsum.photos/200'],
    auteur: 'Dog Breed',
    resume:
      'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    prix: 15,
    editeur: 'editeur',
    commentairesUtilsateur: [{ note: 4, commentaire: "super" }, { note: 5, commentaire: "super" }, { note: 3, commentaire: "super" }],
    libraireCom: 'excellent livre',
    categorieLivre: 'adulte',
    poids: "142",
    longueur: "12",
    largeur: "12",
    epaisseur: "2",
    etatStock: {
      etat: 'En stock',
    },
    langue: {
      langue: 'Français',
    },
    collection: {
      nom: 'Gallimard',
    }
  },
  {
    isbn: 9,
    titre: 'Shiba Inu 9',
    photosLivre: ['https://picsum.photos/200', 'https://picsum.photos/200'],
    auteur: 'Dog Breed',
    resume:
      'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    prix: 15,
    editeur: 'editeur',
    commentairesUtilsateur: [{ note: 4, commentaire: "super" }, { note: 5, commentaire: "super" }, { note: 3, commentaire: "super" }],
    libraireCom: 'excellent livre',
    categorieLivre: 'adulte',
    poids: "142",
    longueur: "12",
    largeur: "12",
    epaisseur: "2",
    etatStock: {
      etat: 'En stock',
    },
    langue: {
      langue: 'Français',
    },
    collection: {
      nom: 'Gallimard',
    }
  },
  {
    isbn: 10,
    titre: 'Shiba Inu 10',
    photosLivre: ['https://picsum.photos/200', 'https://picsum.photos/200'],
    auteur: 'Dog Breed',
    resume:
      'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    prix: 15,
    editeur: 'editeur',
    commentairesUtilsateur: [{ note: 4, commentaire: "super" }, { note: 5, commentaire: "super" }, { note: 3, commentaire: "super" }],
    libraireCom: 'excellent livre',
    categorieLivre: 'adulte',
    poids: "142",
    longueur: "12",
    largeur: "12",
    epaisseur: "2",
    etatStock: {
      etat: 'En stock',
    },
    langue: {
      langue: 'Français',
    },
    collection: {
      nom: 'Gallimard',
    }
  },
  {
    isbn: 11,
    titre: 'Shiba Inu 11',
    photosLivre: ['https://picsum.photos/200', 'https://picsum.photos/200'],
    auteur: 'Dog Breed',
    resume:
      'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    prix: 15,
    editeur: 'editeur',
    commentairesUtilsateur: [],
    libraireCom: 'excellent livre',
    categorieLivre: 'adulte',
    poids: "142",
    longueur: "12",
    largeur: "12",
    epaisseur: "2",
    etatStock: {
      etat: 'En stock',
    },
    langue: {
      langue: 'Français',
    },
    collection: {
      nom: 'Gallimard',
    }
  },
  {
    isbn: 12,
    titre: 'Shiba Inu 12',
    photosLivre: ['https://picsum.photos/200', 'https://picsum.photos/200'],
    auteur: 'Dog Breed',
    resume:
      'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    prix: 15,
    editeur: 'editeur',
    commentairesUtilsateur: [{ note: 4, commentaire: "super" }, { note: 5, commentaire: "super" }, { note: 3, commentaire: "super" }],
    libraireCom: 'excellent livre',
    categorieLivre: 'enfant',
    poids: "142",
    longueur: "12",
    largeur: "12",
    epaisseur: "2",
    etatStock: {
      etat: 'En stock',
    },
    langue: {
      langue: 'Français',
    },
    collection: {
      nom: 'Gallimard',
    }
  },
];

@Component({
  selector: 'app-conseils-lecture',
  templateUrl: './conseils-lecture.component.html',
  styleUrls: ['./conseils-lecture.component.css'],
})
export class ConseilsLectureComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  livres: any[] = [];
  obs!: Observable<any[]>;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  categories: any[] = [];
  filterControl = new FormControl('');

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private produitService: ProduitService,
    public utils: UtilsService,
    private crudService: CrudService
  ) {}

  ngOnInit() {
    this.initData();
    this.getCategories();
    this.filterControl.valueChanges.subscribe((data: any) => {
      this.dataSource.filter = data.trim().toLowerCase();
    });
  }

  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }

  filteredOptions(categories: any[]) {
    return this.filterControl.value
      ? this._filter(this.filterControl.value)
      : categories;
  }

  getCategories() {
    for (let i = 0; i < this.livres.length; i++) {
      const livre = this.livres[i];
      if (this.categories.length == 0) {
        this.categories.push(livre.categorieLivre);
      }

      if (this.utils.itemIsInArray(livre.categorieLivre, this.categories)) {
        this.categories.push(livre.categorieLivre);
      }
    }
  }

  initData() {
    // this.livres = DATA;
    this.crudService.getAll('/livre').subscribe(data => {
      this.livres = data;
      this.dataSource.data = this.livres;
      this.changeDetectorRef.detectChanges();
      this.dataSource.paginator = this.paginator;
      this.obs = this.dataSource.connect();
      this.produitService.livres.next(this.livres);
    })
  }

  private _filter(value: string): string[] {
    return this.categories.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
  }
}
