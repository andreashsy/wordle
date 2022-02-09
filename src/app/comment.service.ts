import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { AppConstants } from "./constants";

@Injectable()
export class CommentService {
    constructor(private http: HttpClient) {}
    url: string = AppConstants.Network.URL_BASE + "api/comment"
    sendComment(jsonString: string) {
        return lastValueFrom(
            this.http.post<string>(this.url, JSON.parse(jsonString))
        )
    }
}