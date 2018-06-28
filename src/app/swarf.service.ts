import { Injectable } from "@angular/core";
import { Dwarf } from "./dwarf";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { FavDrink } from "./favDrink";
import { Occupation } from "./Occupation";
import { Clan } from "./Clan";

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

  getDrinks(): Observable<FavDrink[]> {
    // return this.favoriteDrinks;
    return this.http.get<FavDrink[]>(
    "http://localhost:8080/favDrink"
    );
  }

  getOccupations(): Observable<Occupation[]> {
    return this.http.get<Occupation[]>(
    "http://localhost:8080/occupation"
    );
  }

  getClans(): Observable<Clan[]> {
    return this.http.get<Clan[]>(
    "http://localhost:8080/clan"
    );
  }

  getDwarves(): Observable<Dwarf[]> {
    return this.http.get<Dwarf[]>(
      // "https://forge-server-an.herokuapp.com/api/dwarves"
      "http://localhost:8080/dwarf"
    );
  }

  addDwarf(dwarf: Dwarf) {
    return this.http.post(
      // "https://forge-server-an.herokuapp.com/api/dwarves",
      "http://localhost:8080/dwarf",
      dwarf
    );
  }

  deleteDwarf(id: number) {
    return this.http.delete(
      // "https://forge-server-an.herokuapp.com/api/dwarves/" 
      "http://localhost:8080/dwarf/" + id
    );
  }

  // addDwarf(dwarf: Dwarf) {
  //   dwarf.id = 1;
  //   this.dwarves.push(dwarf);
  // }

  constructor(private http: HttpClient) {}
}
