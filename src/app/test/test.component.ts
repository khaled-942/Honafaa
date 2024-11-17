import { Component, OnInit } from '@angular/core';
import { TestServService } from '../test-serv.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent implements OnInit {
  audios: any[] = [];

  constructor(private audioService: TestServService) {}

  ngOnInit() {
    this.audioService.getAudios().subscribe((data) => {
      this.audios = data;
    });
  }
}
