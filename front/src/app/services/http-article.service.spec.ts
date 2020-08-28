import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { HttpArticleService, url } from './http-article.service';

describe('HttpArticleService', () => {
  let service: HttpArticleService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HttpArticleService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    const req = http.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush([]);
    expect(service).toBeTruthy();
  });

  it('should go in error 404', () => {
    const req = http.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush('', { status: 404, statusText: 'not found' });
    expect(service).toBeTruthy();
  });
});
