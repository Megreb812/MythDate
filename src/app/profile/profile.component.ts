import { Component, OnInit } from "@angular/core";
import { Dwarf } from "../dwarf";
import { SwarfService } from "../swarf.service";
import { Router } from "@angular/router";
import { FavDrink } from "../favDrink";
import { Occupation } from "../Occupation";
import { Clan } from "../Clan";
@Component({
 selector: "app-profile",
 templateUrl: "./profile.component.html",
 styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
 currentDwarf: Dwarf = new Dwarf();

 favoriteDrinks: FavDrink[] = [];

 occupations: Occupation[] = [];

 clans: Clan[]=[];

 submitDwarf() {
   if (
     this.currentDwarf.name &&
     this.currentDwarf.height &&
     this.currentDwarf.beardColor &&
     this.currentDwarf.favoriteDrink &&
     this.currentDwarf.occupation &&
     this.currentDwarf.clan
   ) {
     this.dwarfService
       .addDwarf(this.currentDwarf)
       .subscribe(() => this.router.navigate(["/spark"]));
   }
 }
 // the .subscribe makes able to post in spark from profile
 constructor(private dwarfService: SwarfService, private router: Router) {}

 ngOnInit() {
  //  this.favoriteDrinks = this.dwarfService.getDrinks();
  this.dwarfService.getDrinks().subscribe(
    data => {this.favoriteDrinks=data;}
  )
  //  this.occupations = this.dwarfService.getOccupations();
  this.dwarfService.getOccupations().subscribe(
    data => {this.occupations=data;}
  )
  //  this.clans = this.dwarfService.getClans();
  this.dwarfService.getClans().subscribe(
    data => {this.clans=data;}
  )
 };
}