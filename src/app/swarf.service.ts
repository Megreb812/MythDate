import { Injectable } from "@angular/core";
import { Dwarf } from "./dwarf";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SwarfService {
  dwarves: Dwarf[] = [];

  favoriteDrinks: string[] = [
    "Beer",
    "Mai-Tai",
    "Dragon's Blood",
    "Rob Roy",
    "Elf Earwax",
    "Apple Juice"
  ];

  occupations: string[] = [
    "Smith",
    "Forger",
    "Farmer",
    "Bladesmith",
    "Gemsmith",
    "Miner",
    "Warrior",
    "Mercenary",
    "Bootlegger",
    "Breeder",
    "Mouth Breather"
  ];

  clans: string[] = [
    "Bedazzlers",
    "Sea Seekers",
    "Microsofters",
    "Applers",
    "Pit Sniffers",
    "Grave Diggers"
  ];

  getDrinks() {
    return this.favoriteDrinks;
  }

  getOccupations() {
    return this.occupations;
  }

  getClans() {
    return this.clans;
  }

  getDwarves(): Observable<Dwarf[]> {
    return this.http.get<Dwarf[]>(
      "https://forge-server-an.herokuapp.com/api/dwarves"
    );
  }

  addDwarf(dwarf: Dwarf) {
    return this.http.post(
      "https://forge-server-an.herokuapp.com/api/dwarves",
      dwarf
    );
  }

  deleteDwarf(id: string) {
    return this.http.delete(
      "https://forge-server-an.herokuapp.com/api/dwarves/" + id
    );
  }

  // addDwarf(dwarf: Dwarf) {
  //   dwarf.id = 1;
  //   this.dwarves.push(dwarf);
  // }

  constructor(private http: HttpClient) {}
}
