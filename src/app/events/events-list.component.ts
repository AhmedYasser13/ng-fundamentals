import {Component} from "@angular/core"

@Component({
  templateUrl : './events-list.component.html',
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
