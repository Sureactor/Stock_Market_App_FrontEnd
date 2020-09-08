import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  is:false;
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }
  goBack() {
    this.router.navigateByUrl('/admin/stockexchange');
  }
}
