import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  x: any;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(private auth: AuthService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.auth.currentUserValue) {
      this.router.navigate(['/']);
  }
    this.login = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

   // getter funktion til lettere at indhente formdata
   get f() { return this.login.controls; }

   get username() {
     return this.login.get('username');
   }
 
   get password() {
     return this.login.get('password');
   }
   
   submit() {
     const userdata = {
       username: this.f.username.value,
       password: this.f.password.value
     };
 
     if (this.f.username.value && this.f.password.value) {
       this.auth.login(userdata)
       .pipe(first())
       .subscribe(
           data => {
               this.x = data;
               console.log(this.x);
               this.router.navigate([this.returnUrl]);
               setTimeout(_ => {
                 
                  location.reload();
               }, 500);
           },
           error => {
               console.log(error);
               this.error = error.statusText;
               setTimeout(() => {
                   this.error = '';
               }, 2000);
           });
     } else {
       console.error('Udfyld venligst formularen!');
       this.error = 'Udfyld venligst begge felter!';
       // Læg en rød border input på input felterne
       const uInput = document.forms[0][0] as HTMLElement;
       const pInput = document.forms[0][1] as HTMLElement;
 
       if (this.f.username.value === '') {
         uInput.style.border = '1px solid red';
       } else if (this.f.username.value !== '') {
         uInput.style.border = 'none';
       }
       if (this.f.password.value === '') {
         pInput.style.border = '1px solid red';
       } else if (this.f.password.value !== '') {
         pInput.style.border = 'none';
       }
     }
 
 }


}
