import { Component } from '@angular/core';
import { Confetti } from '../../services/confetti';
import { CounterComponent } from '../../components/counter/counter.component';

import { NgForOf } from '@angular/common'; // ✅ add this
import { FormsModule } from '@angular/forms'; // ✅ Add this

@Component({
  selector: 'app-home',
  imports: [NgForOf, FormsModule, CounterComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  habits: {name: string, isCompleted: boolean}[] = [
    {name: "Charles 👽", isCompleted: false},
    {name: "Vector Anomolies 🛸", isCompleted: false},
    {name: "Phobos at 12 A.D. 🧠", isCompleted: false}
  ];

  constructor(private confettiService: Confetti) {}

  onCheckboxChange(event: MouseEvent, index: number): void {
    const mouseEvent = event as MouseEvent;
    console.log(mouseEvent);
    this.habits[index].isCompleted = true;
    this.confettiService.launchConfetti(mouseEvent);
  }
}