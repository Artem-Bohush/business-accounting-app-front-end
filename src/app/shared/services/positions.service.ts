import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Message, Position} from '../interfaces'

@Injectable({
  providedIn: 'root'
})
export class PositionsService {
  constructor(private http: HttpClient) {
  }

  fetch(categoryId: string): Observable<Position[]> {
    return this.http.get<Position[]>(`https://accounting-app-back-end.herokuapp.com/api/position/${categoryId}`)
  }

  create(position: Position): Observable<Position> {
    return this.http.post<Position>('https://accounting-app-back-end.herokuapp.com/api/position', position)
  }

  update(position: Position): Observable<Position> {
    return this.http.patch<Position>(`https://accounting-app-back-end.herokuapp.com/api/position/${position._id}`, position)
  }

  delete(position: Position): Observable<Message> {
    return this.http.delete<Message>(`https://accounting-app-back-end.herokuapp.com/api/position/${position._id}`)
  }
}
