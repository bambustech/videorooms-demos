import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/app/app.config";
import { map, catchError } from "rxjs/operators";
import { Router } from '@angular/router';

@Component({
  selector: 'landing-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class LandingStartComponent implements OnInit {

  token: string = "";

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }


  createRoom(): void {
    this.http
      .post<any>(`${environment.production ? "/api/room/demo" : "http://localhost:8888/api/room/demo"}`, {})
      .pipe(
        map((room) => {
          this.router.navigate([`/room/${room.roomToken}`])
        })
      )
      .subscribe((r) => {});
  }
}
