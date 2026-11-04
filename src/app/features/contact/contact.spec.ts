import { TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact';

describe('ContactComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent]
    }).compileComponents();
  });

  it('should reject values above the configured length limits', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const component = fixture.componentInstance;

    component.contactForm.controls.nombre.setValue('n'.repeat(101));
    component.contactForm.controls.email.setValue(`${'a'.repeat(250)}@example.com`);
    component.contactForm.controls.telefono.setValue('1'.repeat(31));
    component.contactForm.controls.mensaje.setValue('m'.repeat(1001));

    expect(component.contactForm.controls.nombre.errors?.['maxlength']).toBeTruthy();
    expect(component.contactForm.controls.email.errors?.['maxlength']).toBeTruthy();
    expect(component.contactForm.controls.telefono.errors?.['maxlength']).toBeTruthy();
    expect(component.contactForm.controls.mensaje.errors?.['maxlength']).toBeTruthy();
    expect(component.contactForm.invalid).toBe(true);
  });

  it('should validate locally and clear the form without sending data', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const component = fixture.componentInstance;

    component.contactForm.setValue({
      nombre: 'Persona ficticia',
      email: 'demo@example.com',
      telefono: '',
      mascota: 'Perro',
      mensaje: 'Mensaje de demostración'
    });
    component.onSubmit();

    expect(component.success).toBe(true);
    expect(component.contactForm.controls.nombre.value).toBeNull();
    expect(component.contactForm.pristine).toBe(true);
  });
});
