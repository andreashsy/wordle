import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";

@Injectable()
export class CommentService {
    constructor(private http: HttpClient) {}
    url: string = "http://localhost:8080/api/comment"
    sendComment(jsonString: string) {
        return lastValueFrom(
            this.http.post<string>(this.url, JSON.parse(jsonString))
        )
    }
}