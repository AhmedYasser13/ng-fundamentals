import {Component, Input} from '@angular/core';

@Component({
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{event?.name}}</h2>
      <div>Date: {{event?.date}}</div>
      <div [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span [ngClass]="getTimeClass()" *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span [ngClass]="getTimeClass()" *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span [ngClass]="getTimeClass()" *ngSwitchDefault>(Normal Start)</span>
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
    .earlyStart {
      font-weight: bold;
      color: green !important;
    }

    .lateStart {
      font-weight: bold;
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
        return 'earlyStart';
      }
      case '10:00 am' : {
        return 'lateStart';
      }
      default :
        return '';
    }
  }
}
