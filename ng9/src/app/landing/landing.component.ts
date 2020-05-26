import { Component, OnInit, Renderer2, ElementRef, ViewChild } from "@angular/core";
import { GlobalService } from "../global.service";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
})
export class LandingComponent implements OnInit {

  @ViewChild('backImg') eBackImg: ElementRef;
  backImgInfo=null;

  constructor(private renderer: Renderer2, private globalService:GlobalService) {
    //this.renderer.addClass(document.body, "landing-bg");

    

  }

  ngOnInit(): void {
    this.globalService.retrieveBackground().then( backData => {
      console.log(backData);
      this.backImgInfo = backData;
      this.eBackImg.nativeElement.style.backgroundImage = 'url("'+backData.urls.regular+'")';
    }, err => {
      console.error(err);
    });
  }
}
