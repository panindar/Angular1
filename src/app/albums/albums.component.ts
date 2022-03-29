import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums',
  template: `
    <button (click)="onClick()"> Back </button>
    <h2> {{errorMsg}} </h2>
    <h1> albums of you </h1>
    <div *ngFor="let album of albums">  
      <div *ngIf="isSelected(album)"> 
        <ul>  
          <li> <h2> AlbumId: {{album.id}} </h2> <h2> title: {{album.title}} </h2>  </li>
          <button (click)="onSelect(album)"> go to your photos </button>
        </ul>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class AlbumsComponent implements OnInit {
  public useId;
  public albums = [];
  public errorMsg;

  constructor(private route: ActivatedRoute, private _albumsService: AlbumsService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.useId = id;
    });
    this._albumsService.getAlbums()
      .subscribe(data => this.albums = data,
                 error => this.errorMsg = error)
  }
  isSelected(album) {
    return this.useId === album.userId
  }
  onClick() {
    let selectedId = this.useId ? this.useId : null;
    this.router.navigate(['/users', selectedId]);
  }
  onSelect(album) {
    this.router.navigate(['/images', album.id])
  }
  }


