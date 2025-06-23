import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DonationService {
  constructor(private http: HttpClient) {}

  donate(data: any) {
    return this.http.post('/donations', data);
  }

  getMyDonations() {
    return this.http.get('/donations');
  }
}