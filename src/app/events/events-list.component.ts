import {Component} from "@angular/core"

@Component({
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr>
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
    </div>
  `,
  selector: 'events-list'
})
export class EventsListComponent {
  event = {
    id: 1,
    date: '20/1/2025',
    time: '10:00 am',
    price: 19.99,
    name: 'Angular Connect',
    imageUrl: '/assets/images/angulareconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: "England"
    }
  }

}
