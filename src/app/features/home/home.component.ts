import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { RedButtonComponent } from '../../shared/components/red-button/red-button.component';
import { DevicesSectionComponent } from '../../shared/components/sections/devices-section/devices-section.component';
import { FaqSectionComponent } from '../../shared/components/sections/faq-section/faq-section.component';
import { TariffsSectionComponent } from '../../shared/components/sections/tariffs-section/tariffs-section.component';
import { FilmsSectionComponent } from '../../shared/components/sections/films-section/films-section.component';
import { CtaSectionComponent } from '../../shared/components/sections/cta-section/cta-section.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    FilmsSectionComponent,
    DevicesSectionComponent,
    FaqSectionComponent,
    TariffsSectionComponent,
    CtaSectionComponent,
    FooterComponent,
    RedButtonComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
