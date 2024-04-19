import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  @Input() testText: string = '';

  @Output() textOutput: EventEmitter<string> = new EventEmitter<string>();

  sendData() {
    const message = 'Hello from footer';
    this.textOutput.emit(message);
  }
}
