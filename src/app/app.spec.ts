import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('debe iniciar con 3 tareas precargadas', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app['tareas']().length).toBe(3);
  });

  it('el signal title debe contener el nombre correcto del proyecto', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app['title']()).toBe('laboratorio-pwa');
  });

  it('debe agregar una nueva tarea correctamente', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    app['nuevaTarea'] = 'Tarea de prueba';
    app.agregarTarea();
    const tareas = app['tareas']();
    expect(tareas.length).toBe(4);
    expect(tareas[tareas.length - 1].texto).toBe('Tarea de prueba');
  });

  it('debe eliminar una tarea correctamente', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    app.eliminarTarea(1);
    expect(app['tareas']().length).toBe(2);
  });
});