import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";

@Injectable()
export class WordListService {

    url: string = "http://localhost:8080/api/word"
    headers: HttpHeaders = new HttpHeaders()
        .set("Content-Type", "text/plain")

    constructor(private http: HttpClient) {}

    getAddList() {

    }

    getRemoveList() {

    }

    toAddList(word: string) {
        return lastValueFrom(
            this.http.post<string>(this.url, "ADD " + word, {headers: this.headers})
        )
    }

    toRemoveList(word: string) {
        return lastValueFrom(
            this.http.post<string>(this.url, "REM " + word, {headers: this.headers})
        )
    }
    
}