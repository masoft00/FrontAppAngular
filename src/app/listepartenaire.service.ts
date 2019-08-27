import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListepartenaireService {

 public host = 'http://127.0.0.1:8000/lister/partenaire';

  constructor(private http: HttpClient) { }

  liste_partenaire() {
    return this.http.get(this.host);
  }
}
