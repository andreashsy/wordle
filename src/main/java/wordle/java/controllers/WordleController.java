package wordle.java.controllers;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import wordle.java.model.Player;
import static wordle.java.Constants.*;

import java.util.logging.Level;
import java.util.logging.Logger;

@Controller
@RequestMapping(path="/", produces = MediaType.TEXT_HTML_VALUE)
public class WordleController {
    private static final Logger logger = Logger.getLogger(WordleController.class.getName());

    @PostMapping("/guess")
    String updateForm(@RequestBody MultiValueMap<String, String> form, Model model) {
        String savedPredictionsString = form.getFirst("savedPredictions");
        String savedAnswer = form.getFirst("answer");
        String guess = form.getFirst("guess");

        // initialize player using saved predictions and answers
        Player player = new Player();
        if (savedAnswer != "") {
            player.setAnswer(savedAnswer);
        }
        if (savedPredictionsString != "") {
            // int currentGuessIndex = StringUtils.countOccurrencesOf("|", savedResultsString);
            // load previous guesses
            for (String s:savedPredictionsString.split(RE_DELIMITER)) {
                player.appendNewGuessAndFindResult(s);
                logger.log(Level.INFO, "guess: " + s);
            }
        }

        // add new guess and result to predictions
        player.appendNewGuessAndFindResult(guess);
        savedPredictionsString = savedPredictionsString + DELIMITER + guess;

        // add to model
        model.addAttribute("playerObj", player);
        model.addAttribute("answer", player.getAnswer());
        model.addAttribute("savedPredictionsString", savedPredictionsString);
        return "index";
    }
}
