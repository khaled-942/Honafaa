import { Component } from '@angular/core';
import { TestServService } from '../test-serv.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss',
})
export class UploadComponent {
  newAudio = {
    title: '',
    description: '',
    url: '',
    uploadDate: new Date().toISOString(),
  };

  constructor(private audioService: TestServService) {}

  uploadAudio() {
    this.audioService.addAudio(this.newAudio).then(() => {
      alert('Audio uploaded successfully!');
      this.newAudio = {
        title: '',
        description: '',
        url: '',
        uploadDate: new Date().toISOString(),
      };
    });
  }
}
