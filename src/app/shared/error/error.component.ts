import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  @Input() show: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  reload(): void {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/error404', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl(currentUrl);
    });
  }

}
