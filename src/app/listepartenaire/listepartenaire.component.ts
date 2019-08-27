import { Component, OnInit } from '@angular/core';
import { ListepartenaireService } from '../listepartenaire.service';

@Component({
  selector: 'app-listepartenaire',
  templateUrl: './listepartenaire.component.html',
  styleUrls: ['./listepartenaire.component.css']
})
export class ListepartenaireComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  constructor(private liste_partenaire: ListepartenaireService) { }
    partenaires;
    ngOnInit() {
      this.liste_partenaire.liste_partenaire()
      .subscribe (data => {
        this.partenaires = data;
      }, err => {
          console.log(err);
      });
    }

}
