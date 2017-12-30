import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CognitoService } from './cognito.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [CognitoService]
})

export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule
    };
  }
}
