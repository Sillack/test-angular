import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest,} from '@angular/common/http';
import {from, Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> | any {
    return from(this.handleAccess(req, next));
  }

  private handleAccess(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    let changedRequest = request;
    // HttpHeader object immutable - copy values
    const headerSettings: { [name: string]: string | string[] } = {};

    for (const key of request.headers.keys()) {
      headerSettings[key] = request.headers.getAll(key);
    }

    if (request.headers.getAll('Content-Type') == null) {
      headerSettings['Content-Type'] = 'text/html';
    }
    if (request.headers.getAll('Access-Control-Allow-Origin') == null) {
      headerSettings['Access-Control-Allow-Origin'] = '*';
    }

    const newHeader = new HttpHeaders(headerSettings);

    changedRequest = request.clone({
      headers: newHeader,
    });

    return next.handle(changedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
}
