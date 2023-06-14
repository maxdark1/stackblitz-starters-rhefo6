import 'zone.js/dist/zone';
import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

/**
 * 1. Request the 'users' from the following endpoint and
 *    display each user name on screen.
 *    - https://jsonplaceholder.typicode.com/users
 * 2. Each user has its own company information, when a user
 *    is selected show their company information.
 * 3. With and input field filter the users by name. Try using either template driven or reactive forms.
 */

@Component({
  standalone: true,
  template: `Use template user.component.html`,
})
class UserComponent {}

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `<div>TODO: render child component</div>`,
})
export class App {
  name = 'Angular Playground';
}

bootstrapApplication(App, {
  providers: [importProvidersFrom(HttpClientModule)],
});

interface User {
  id: number;
  name: string;
  username: string;
  company: Company;
}

interface Company {
  name: string;
}
