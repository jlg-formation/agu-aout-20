import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  f = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl(10, [Validators.required]),
    qty: new FormControl(1, [Validators.required]),
  });
  constructor(
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  submit(): void {
    console.log('submit');
    this.articleService.add(this.f.value as Article);
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
