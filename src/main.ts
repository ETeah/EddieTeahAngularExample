import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

//[THIS IS ANGULAR---- NO DIFFERENT FROM BLAZOR IN my opinion]
//[OOP]
//[COMPONENTS]
//[DIRECTIVES]
///This is the basic app
///Built with ng new "foldername"
///served with ng serve
