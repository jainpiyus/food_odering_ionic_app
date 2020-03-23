import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuTabPage } from './menu-tab.page';

describe('MenuTabPage', () => {
  let component: MenuTabPage;
  let fixture: ComponentFixture<MenuTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
