import { Component, OnInit } from '@angular/core';
import { DonationService } from '../../services/donation.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html'
})
export class DonationComponent implements OnInit {
  description = '';
  quantity: number = 1;
  donations: any[] = [];

  constructor(private donationService: DonationService) {}

  ngOnInit(): void {
    this.donationService.getMyDonations().subscribe(data => {
      this.donations = data;
    });
  }

  submit() {
    this.donationService.donate({ description: this.description, quantity: this.quantity }).subscribe(() => {
      this.ngOnInit();
      this.description = '';
      this.quantity = 1;
    });
  }
}