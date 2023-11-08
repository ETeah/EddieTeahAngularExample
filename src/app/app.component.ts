import { Component } from '@angular/core';
//[]
import { Logger } from './utils/Logger';
//[]
//so this component is being served into the page - like a react index
//template are -html injection into the component
//you can do Seperation of concern - Code splitting by
//using templateURL to route to the file
//You will see the default -html template
//That was it
//I am used to the <></> from jsx in react -so i just added a div
//events are wrapped in ()
//[]is for binding properties
@Component({
  selector: 'app-root',
  template: ` <div>
    <h2>Eddie T. Angular Demo</h2>
    <p>Testing Angular. No different from blazor in my opinion!!!</p>
    <button (click)="onAdd()">ADD</button>
  </div>`,
  styleUrls: ['./app.component.css'],
})
//this class below can be seen as the action area -
// <script>put my functions here</script> area for the index html
export class AppComponent {
  title = 'EddieTeahAngularExample';
  public Base_Number: number = 0;
  public m_Log: Logger = new Logger();
  constructor() {}
  onAdd = async () => {
    this.m_Log.logger(this.Base_Number);
    this.Base_Number++;
  };
}

//Now we import content

//As shown- statemanagement is way easier in Blazor and Angular
//than in react with - useStates ...blah blah blah - use effect redux etc
//But people have been complaining about Angular for seeming complex
//Angular - definition- is , its a platform - not a framework
//So instead of trying to combine everything in it as one guide
//its better to pick the parts that works and stick with it
//My nameis Eddie Teah - 10/22/2023 is today's date -thanks for watching
