import { Injectable } from "@angular/core";
import { Dwarf } from "./dwarf";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse
} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SwarfService {
  dwarves: Dwarf[] = [];

  // getDwarves() {
  //   return this.dwarves;
  // }

  getDwarves() : Observable<Dwarf[]> {
    return this.http.get<Dwarf[]>(
    "https://forge-server-an.herokuapp.com/api/dwarves"
  );
  }

  addDwarf(dwarf: Dwarf){
    return this.http.post( "https://forge-server-an.herokuapp.com/api/dwarves", dwarf);
  }

  deleteDwarf(id:string){
    return this.http.delete("https://forge-server-an.herokuapp.com/api/dwarves/"+ id
  );
  }

  // addDwarf(dwarf: Dwarf) {
  //   dwarf.id = 1;
  //   this.dwarves.push(dwarf);
  // }

  constructor(private http : HttpClient) {}
}
