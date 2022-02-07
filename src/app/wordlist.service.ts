import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class WordListService {

    url: string = ""

    constructor(private http: HttpClient) {}

    getAddList() {

    }

    getRemoveList() {

    }

    toAddList(word: string) {
        this.http.post<string>(this.url, "ADD " + word)
    }

    toRemoveList(word: string) {
        this.http.post<string>(this.url, "REM " + word)
    }
    
}