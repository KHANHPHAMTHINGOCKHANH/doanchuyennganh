import { Component } from '@angular/core';
import { ShareModule } from '../../../shared/shared.module';
import { TaigaModule } from '../../../shared/taiga.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ShareModule, TaigaModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

})
export class HomeComponent {


}
