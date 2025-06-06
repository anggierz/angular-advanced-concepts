import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  private readonly fb = inject(FormBuilder);
  public form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z]+$')]],
    email: ['', [Validators.required, Validators.email]],
    city: ['', [Validators.required]],
    country: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    phone: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    company: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    age: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
  })

  public onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted!', this.form.value);
      alert('Usuario creado correctamente');
      this.resetForm();
    } else {
      console.error('Form is invalid');
      alert('Por favor, completa todos los campos del formulario correctamente.');
    }
  }
  public resetForm() {
    this.form.reset();
  }
  
}
