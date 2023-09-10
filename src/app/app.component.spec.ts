import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
      // cada it es un testeo 
    //esta beforeeach se ejecuta antesd de cada test y aftereach despues
  beforeEach(async () => {
    // tengo que ikmportar y preparar aca lo que usa en modulos ese componente o si no falla 
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });
  it('El componente esta creado correctamente! ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  //prueba para ver que el formulario esta invalido 
  it(' cuando se agrega usuario pero no clave  entonces es invalido',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const num1 = app.form.controls['numero1'];
    num1.setValue('2');
    expect(app.form.invalid).toBe(true);
  });
  it('Debe retoprnar true ',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const num1 = app.form.controls['numero1'];
    const num2 = app.form.controls['numero2'];
    num1.setValue('2');
    num2.setValue('4');
    // referencia a un elemento referizado si tengo un html con clase puedo usar por ej  button.cssclass
    const btnElement = fixture.debugElement.query(By.css('button'));
    btnElement.nativeElement.click();
    expect(app.result).toEqual(6);
  });


    // test it('nombretest',)
    it('whenCallSumFuctionThenReturnfour',waitForAsync(()=>{
      // condicion de exito
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      //(<HTMLInputElement>)
    }));

/*

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('docker_example_angular app is running!');
  });
  */
});
