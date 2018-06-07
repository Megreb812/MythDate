import { Component, OnInit } from "@angular/core";
import { Dwarf } from "../dwarf";
import { SwarfService } from "../swarf.service";
import { Router } from "@angular/router";
@Component({
 selector: "app-profile",
 templateUrl: "./profile.component.html",
 styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
 currentDwarf: Dwarf = new Dwarf();

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

 submitDwarf() {
   if (
     this.currentDwarf.name &&
     this.currentDwarf.height &&
     this.currentDwarf.beardColor &&
     this.currentDwarf.favoriteDrink &&
     this.currentDwarf.occupation
   ) {
     this.dwarfService
       .addDwarf(this.currentDwarf)
       .subscribe(() => this.router.navigate(["/spark"]));
   }
 }
 // the .subscribe makes able to post in spark from profile
 constructor(private dwarfService: SwarfService, private router: Router) {}

 ngOnInit() {}
}