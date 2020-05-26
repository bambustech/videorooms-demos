import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoroomsService } from '@bambustech/videorooms-ng';
import { GlobalService } from '../global.service';
import { environment } from '../app.config';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  options: any;
  hangup: Boolean = false;

  constructor(private vService: VideoroomsService, private route: ActivatedRoute, private globalService: GlobalService,
              private renderer: Renderer2, private router: Router) {
    this.globalService.title.next("VideoRooms - En sala");
    this.options = {
      server: "https://stg2.tingelmar.com",
      showFirstParticipantMsg: true
    }

    this.vService.onHangup = () => {
      this.hangup = true;
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.renderer.removeClass(document.body, "landing-bg")
    this.joinRoom(this.route.snapshot.paramMap.get("token"));
  }

  joinRoom(token) {
    this.vService.joinRoom(this.route.snapshot.paramMap.get('token'), "BambusTech");
  }
}
