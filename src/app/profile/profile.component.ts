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

  submitDwarf() {
    if (
      this.currentDwarf.name &&
      this.currentDwarf.beardColor &&
      this.currentDwarf.beardLength &&
      this.currentDwarf.height
    ) {
      this.swarfService.addDwarf(this.currentDwarf);
      this.router.navigate(["/spark"]);
    }
  }
  constructor(private swarfService: SwarfService, private router: Router) {}

  ngOnInit() {}
}
