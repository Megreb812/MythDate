import { Component, OnInit } from "@angular/core";
import { Dwarf } from "../dwarf";
import { SwarfService } from "../swarf.service";
import { Http, Headers, Response } from "@angular/http";

@Component({
 selector: "app-spark",
 templateUrl: "./spark.component.html",
 styleUrls: ["./spark.component.css"]
})
export class SparkComponent implements OnInit {
 constructor(private dwarfService: SwarfService) {}

 dwarves: Dwarf[];

 getDwarves() {
   // this.dwarves = this.dwarfService.getDwarves();
   this.dwarfService.getDwarves().subscribe(d => {
     this.dwarves = d;
   });
 }
 deleteDwarf(id: number) {
   this.dwarfService.deleteDwarf(id).subscribe();
   this.dwarves = this.dwarves.filter(x => x.id != id);
 }

 ngOnInit() {
   this.getDwarves();
 }
}