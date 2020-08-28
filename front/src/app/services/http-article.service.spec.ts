import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HttpArticleService } from './http-article.service';

describe('HttpArticleService', () => {
  let service: HttpArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HttpArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
