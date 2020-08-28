import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { HttpArticleService, url } from './http-article.service';
import { a1 } from '../test/data';

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

  it('should add', () => {
    // because of refresh in constructor
    const req1 = http.expectOne(url);
    expect(req1.request.method).toEqual('GET');
    req1.flush([]);

    service.add(a1);

    // because of adding article
    const req2 = http.expectOne(url);
    expect(req2.request.method).toEqual('POST');
    req2.flush('');

    // refresh just after adding
    const req3 = http.expectOne(url);
    expect(req3.request.method).toEqual('GET');
    req3.flush([a1]);
    expect(service).toBeTruthy();
  });

  it('should add in error', () => {
    // shorter version
    http.expectOne(url).flush([]);

    service.add(a1);

    // add in error
    http.expectOne(url).flush('', { status: 405, statusText: 'not allowed' });
    expect(service).toBeTruthy();
  });

  it('should remove', () => {
    // shorter version
    http.expectOne(url).flush([]);

    service.remove([a1]);

    // because of adding article
    const req2 = http.expectOne(url);
    expect(req2.request.method).toEqual('DELETE');
    req2.flush('');

    // refresh just after adding
    http.expectOne(url).flush([]);

    expect(service).toBeTruthy();
  });

  it('should remove in error', () => {
    // shorter version
    http.expectOne(url).flush([]);

    service.remove([a1]);

    http.expectOne(url).flush('', { status: 405, statusText: 'not allowed' });
    expect(service).toBeTruthy();
  });
});
