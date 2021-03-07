import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsPhotosComponent } from './albums-photos.component';

describe('AlbumsPhotosComponent', () => {
  let component: AlbumsPhotosComponent;
  let fixture: ComponentFixture<AlbumsPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumsPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
