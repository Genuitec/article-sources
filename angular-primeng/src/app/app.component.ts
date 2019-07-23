import { Component } from '@angular/core';
import { CryptoService } from './crypto.service';
import { Coin } from './coin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  coins: Coin[];

  constructor(private service: CryptoService) {
    this.loadCoins();
  }

  loadCoins() {
    this.service.list().subscribe(
      coins => {
        this.coins = coins.map(c => new Coin(c));
      }
    );
  }
}
