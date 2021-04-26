import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

const components = [HeaderComponent, ContentComponent, FooterComponent];

@NgModule({
  declarations: components,
  imports: [CommonModule],
  exports: [...components],
})
export class LayoutModule {}
