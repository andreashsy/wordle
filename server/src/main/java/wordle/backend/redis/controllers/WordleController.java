package wordle.backend.redis.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.json.Json;
import jakarta.json.JsonObject;
import wordle.backend.redis.services.CommentService;
import wordle.backend.redis.services.WordlistService;

@RestController
@RequestMapping(path="/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class WordleController {

    @Autowired
    WordlistService wordlistService;

    @Autowired
    CommentService commentService;

    @PostMapping(path="/word", consumes = MediaType.TEXT_PLAIN_VALUE)
    public ResponseEntity<String> addWordToDatabase(@RequestBody String requestBody) {
        String message;
        String word = requestBody.split(" ")[1];
        System.out.println("addWordToDatabase Request Body >>>>>>> " + requestBody);

        if (requestBody.startsWith("ADD")) {
            message = " has been added";
            wordlistService.pushAddWord(word);

        } else if (requestBody.startsWith("REM")) {
            message = " has been removed";
            wordlistService.pushRemoveWord(word);
        } else {
            message = " does not have the correct format";
        }

        JsonObject jsonResponse = Json.createObjectBuilder()
            .add("message", "%s%s".formatted(word, message))
            .build();
        
        return ResponseEntity.ok(jsonResponse.toString());
    }

    @GetMapping(path="/getWords")
    public ResponseEntity<String> getWordList() {

        String addWordsConcat = String.join(",", wordlistService.getAddWordList());
        String removeWordsConcat = String.join(",", wordlistService.getRemoveWordList());

        JsonObject jsonResponse = Json.createObjectBuilder()
        .add("addList", addWordsConcat)
        .add("removeList", removeWordsConcat)
        .build();

        return ResponseEntity.ok(jsonResponse.toString());
    }

    @PostMapping(path="/comment", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> addCommentToDatabase(@RequestBody String requestBody) {
        System.out.println("Comment Request Body >>>>>>> " + requestBody);
        commentService.addComment(requestBody);
        JsonObject jsonResponse = Json.createObjectBuilder()
            .add("message", "Message received")
            .build();
        return ResponseEntity.ok(jsonResponse.toString());
    }
    
}
