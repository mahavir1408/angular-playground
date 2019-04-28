import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { UrlHelperService } from './url-helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('iframe') iframe: ElementRef;
  title = 'iframe-poc';

  constructor(private urlHelperService: UrlHelperService) { }

  ngOnInit() {
    // this.urlHelperService.get('http://localhost/api/file/123')\
    this.urlHelperService.get('https://corsproxy.github.io/')
      .subscribe(blob => this.iframe.nativeElement.src = blob);
  }
}
