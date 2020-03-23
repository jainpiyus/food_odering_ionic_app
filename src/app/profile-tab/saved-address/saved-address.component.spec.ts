import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SavedAddressComponent } from './saved-address.component';

describe('SavedAddressComponent', () => {
  let component: SavedAddressComponent;
  let fixture: ComponentFixture<SavedAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedAddressComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SavedAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
