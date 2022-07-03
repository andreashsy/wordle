import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { AppConstants } from "./constants";

@Injectable()
export class WordListService {
    
    urlToEditWords: string = AppConstants.Network.URL_BASE + "api/word"
    urlToGetWordlist: string = AppConstants.Network.URL_BASE + "api/getWords"

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