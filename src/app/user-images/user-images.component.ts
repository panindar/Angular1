import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, ParamMap } from '@angular/router';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-user-images',
  template: `
  <button (click)="onClick()"> back  </button>
    <h1> displaying images </h1>
      <h2> {{errorMsg}} </h2>
      <div class="card" *ngFor = "let image of images" >
        <div *ngIf="isSelected(image)">
          <li> <img src={{image.thumbnailUrl}} alt={{image.url}} fluid /> <div> {{image.id}} {{image.title}} </div> </li>
        </div>
      </div>
  `,
  
  styleUrls: ['./user-images.component.css']
})
export class UserImagesComponent implements OnInit {

  public images = []
  public errorMsg = '';
  public albId;

  constructor(private _imageService: ImageService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.albId = id;
    });


    this._imageService.getImages()
      .subscribe(data => this.images = data,
                 error => this.errorMsg = error);
  }
  isSelected(image) {
      return this.albId === image.albumId
  }
  onClick() {
    let selectedId = this.albId ? this.albId : null;
    this.router.navigate(['/albums', selectedId])
  }

}
