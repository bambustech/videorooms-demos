import { Component, OnInit } from '@angular/core';
import { VideoroomsService } from '@bambustech/videorooms-ng';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-left-room',
  templateUrl: './left-room.component.html',
  styleUrls: ['./left-room.component.scss']
})
export class LeftRoomComponent implements OnInit {

  token: any;
  constructor(private videoRoomService: VideoroomsService, private route: ActivatedRoute) {
    this.token = route.snapshot.paramMap.get('token')
  }

  ngOnInit(): void {
  }

  reload(): void {
    window.location.reload()
  }
}
