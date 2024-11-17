import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestServService {

  private collectionName = 'audios';

  constructor(private firestore: AngularFirestore) {}

  getAudios(): Observable<any[]> {
    return this.firestore.collection(this.collectionName).valueChanges();
  }

  addAudio(audio: any): Promise<any> {
    return this.firestore.collection(this.collectionName).add(audio);
  }

  deleteAudio(id: string): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).delete();
  }
}
