import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user/user.service';
import { User } from 'src/app/models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {
  public validateForm!: FormGroup;
  public user: User = new User() 

  constructor(private userService: UserService) { }
  

  ngOnInit(): void {
    this.initContactForm();
  }

  public initContactForm(): void {
    this.validateForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"), Validators.required]),
      rut: new FormControl(null, [Validators.required]),
    })
  }

  public sendUser (e: Event): void {
    if (this.validateForm.status == 'VALID') {
      this.userService.sendUser(this.user).then((response: any) => {
        console.log('response', response);
      }).catch((err: any) => {
        console.log('err', err);
      })
    } else {
      alert('Formulario invalido');
    }
  }
}
