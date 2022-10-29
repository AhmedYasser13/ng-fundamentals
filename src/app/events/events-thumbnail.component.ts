import {Component , Input} from "@angular/core";

@Component({
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{event.name}}</h2>
      <div>Date: {{event.date}}</div>
      <div>Time: {{event.time}}</div>
      <div>Price: \${{event.price}}</div>
      <div>
        <span>Location: {{event.location.address}}</span>
        <span>&nbsp;</span>
        <span>{{event.location.city}}, {{event.location.country   }}</span>
        <span></span>
      </div>
    </div>

  `,
  selector: 'event-thumbnail'
})
export class EventsThumbnailComponent {
  @Input()
  event: any;
}
