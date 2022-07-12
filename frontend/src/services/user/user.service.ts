import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import api from 'src/services/axios';

@Injectable()
export class UserService {

  constructor() {}

  public sendUser(user: User): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      api.post('/users', user).then((data: any) => {
        resolve(data.data);
      }).catch((err: any) => {
        reject(err);
      });
    });
  }
}
