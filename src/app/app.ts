import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarea } from './models/tarea';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('laboratorio-pwa');

  // Lista de tareas iniciales
  protected readonly tareas = signal<Tarea[]>([
    { id: 1, texto: 'Estudiar Angular', completada: false },
    { id: 2, texto: 'Configurar el Service Worker', completada: true },
    { id: 3, texto: 'Probar la app en modo offline', completada: false },
  ]);

  // Texto del input para agregar nueva tarea
  protected nuevaTarea = '';

  // Estado de conexión (online/offline)
  protected readonly enLinea = signal<boolean>(navigator.onLine);

  constructor() {
    window.addEventListener('online', () => this.enLinea.set(true));
    window.addEventListener('offline', () => this.enLinea.set(false));
  }

  agregarTarea(): void {
    const texto = this.nuevaTarea.trim();
    if (!texto) return;

    const nuevoId = this.tareas().length
      ? Math.max(...this.tareas().map(t => t.id)) + 1
      : 1;

    this.tareas.update(lista => [...lista, { id: nuevoId, texto, completada: false }]);
    this.nuevaTarea = '';
  }

  alternarCompletada(id: number): void {
    this.tareas.update(lista =>
      lista.map(t => t.id === id ? { ...t, completada: !t.completada } : t)
    );
  }

  eliminarTarea(id: number): void {
    this.tareas.update(lista => lista.filter(t => t.id !== id));
  }
}