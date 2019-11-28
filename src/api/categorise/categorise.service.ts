import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { parseDates } from '../shared';
import { ICategorise } from './categorise.interfaces';

@Injectable()
export class CategoriseService {
  constructor(private http: HttpClient) {
  }

  create(categorise: ICategorise): Observable<ICategorise> {
    return this.http
      .post<ICategorise>('/api/categorise', categorise)
      .pipe(map(parseDates));
  }

  read(categoriseId: ICategorise['id']): Observable<ICategorise> {
    return this.http
      .get<ICategorise>(`/api/categorise/${categoriseId}`)
      .pipe(map(parseDates));
  }

  update(categorise: Partial<ICategorise>, categoriseId: ICategorise['id']): Observable<ICategorise> {
    return this.http
      .put<ICategorise>(`/api/categorise/${categoriseId}`, categorise)
      .pipe(map(parseDates));
  }

  destroy(categoriseId: ICategorise['id']): Observable<{}> {
    return this.http
      .delete(`/api/categorise/${categoriseId}`);
  }

  getAll(): Observable<ICategorise[]> {
    return this.http
      .get<{categorises: ICategorise[]}>('/api/categorise')
      .pipe(
        map(categorises => categorises.categorises),
        map(categorises => categorises.map(parseDates))
      );
  }
}
