import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  departmentId: number;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }

  goPrevious() :void {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/department', previousId]);
  }

  goNext() :void {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/department', nextId]);
  }

}
