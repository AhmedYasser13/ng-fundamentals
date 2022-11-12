import {Component, Input} from '@angular/core';

@Component({
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{event?.name}}</h2>
      <div>Date: {{event?.date}}</div>
      <div [ngClass]="getTimeClass()" [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: \${{event?.price}}</div>
      <div *ngIf="event?.location">
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
      <div *ngIf="event?.onlineUrl">
        Online URL : {{event?.onlineUrl}}
      </div>
    </div>
  `,
  selector: 'event-thumbnail',
  styles: [`
    .bold {
      font-weight: bold;
    }

    .green {
      color: green !important;
    }

    .red {
      color: red !important;
    }

    .pad-left {
      margin-left: 10px;
    }

    .well div {
      color: #bbb;
    }

    .thumbnail {
      min-height: 210px;
    }
  `]
})
export class EventsThumbnailComponent {
  @Input()
  event: any;

  getTimeClass(): string {
    switch (this.event?.time) {
      case '8:00 am' : {
        return 'green bold';
      }
      case '10:00 am' : {
        return 'red bold';
      }
      default :
        return '';
    }
  }
}
