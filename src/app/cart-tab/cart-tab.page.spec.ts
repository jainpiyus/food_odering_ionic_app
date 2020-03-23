import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartTabPage } from './cart-tab.page';

describe('CartTabPage', () => {
  let component: CartTabPage;
  let fixture: ComponentFixture<CartTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
