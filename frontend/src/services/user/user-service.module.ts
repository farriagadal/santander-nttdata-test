import { NgModule } from '@angular/core';
import { UserService } from './user.service';

@NgModule({
  providers: [UserService],
  exports: []
})

export class UserServiceModule {}
