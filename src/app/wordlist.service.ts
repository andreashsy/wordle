import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";

@Injectable()
export class WordListService {

    urlToEditWords: string = "http://localhost:8080/api/word"
    urlToGetWordlist: string = "http://localhost:8080/api/getWords"

    headers: HttpHeaders = new HttpHeaders()
        .set("Content-Type", "text/plain")

    constructor(private http: HttpClient) {}

    getStoredLists(): Promise<JSON> {
        return lastValueFrom(
            this.http.get<JSON>(this.urlToGetWordlist)
        )
    }

    toAddList(word: string) {
        return lastValueFrom(
            this.http.post<string>(this.urlToEditWords, "ADD " + word, {headers: this.headers})
        )
    }

    toRemoveList(word: string) {
        return lastValueFrom(
            this.http.post<string>(this.urlToEditWords, "REM " + word, {headers: this.headers})
        )
    }
    
}