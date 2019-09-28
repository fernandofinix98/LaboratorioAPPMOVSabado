import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  registrarForm: FormGroup;
  submitted = false;
  

  constructor(private formBuilder: FormBuilder){
  
  }

  ngOnInit() {
    this.registrarForm = this.formBuilder.group(
      {
      nombre: ['',Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      confirmacionContrasena: ['',Validators.required]
    },
    );
  }

  inOnInit(){}

  get f() {return this.registrarForm.controls;}

  registrar(){
    console.log(this.registrarForm.valid);
    }
  
    MustMatch(controlName: string, matchingControlName: string){
      return true;
    }
  }
