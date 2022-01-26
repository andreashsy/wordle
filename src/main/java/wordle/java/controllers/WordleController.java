package wordle.java.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import wordle.java.model.Player;
import wordle.java.model.Prediction;
import wordle.java.services.PlayerService;

import static wordle.java.Constants.*;

import java.util.logging.Level;
import java.util.logging.Logger;

@Controller
@RequestMapping(path="/", produces = MediaType.TEXT_HTML_VALUE)
public class WordleController {
    private static final Logger logger = Logger.getLogger(WordleController.class.getName());

    @Autowired
    PlayerService playerService;

    @PostMapping("/guess")
    String updateForm(@RequestBody MultiValueMap<String, String> form, Model model) {
        String savedPredictionsString = form.getFirst("savedPredictions");
        String savedAnswer = form.getFirst("answer");
        String guess = form.getFirst("guess").toLowerCase();

        // checks if guess is valid, if invalid return to same page with error message
        boolean isGuessInvalid = true;
        for (String word:ALL_WORD_ARRAY) {
            if (word.equals(guess)) {
                logger.log(Level.INFO, "guess is valid!");
                logger.log(Level.INFO, "word is: " + word);
                logger.log(Level.INFO, "guess is: " + guess);
                isGuessInvalid = false;
                break;
            }
        }
        if (isGuessInvalid) {
            logger.log(Level.INFO, "guess is ***NOT*** valid!");
            Player reloadedPlayer = new Player();
            if (savedAnswer != "") {
                // bring forward old answer
                reloadedPlayer.setAnswer(savedAnswer);
                logger.log(Level.INFO, "old answer set");
            }
            if (savedPredictionsString != "") {
                // load previous guesses
                for (String s:savedPredictionsString.split(RE_DELIMITER)) {
                    reloadedPlayer.appendNewGuessAndFindResult(s);
                    logger.log(Level.INFO, "previous prediction set");
                }
            }
            reloadedPlayer.updateAllSubpredictions();

            model.addAttribute("playerObj", reloadedPlayer);
            model.addAttribute("answer", reloadedPlayer.getAnswer());
            model.addAttribute("savedPredictionsString", savedPredictionsString);
            model.addAttribute("previousGuessInvalid", true);
            return "index";
        }

        logger.log(Level.INFO, "word validity check passed");

        // initialize player using saved predictions and answers
        Player player = new Player();
        if (savedAnswer != "") {
            player.setAnswer(savedAnswer);
        }
        if (savedPredictionsString != "") {
            // load previous guesses
            for (String s:savedPredictionsString.split(RE_DELIMITER)) {
                player.appendNewGuessAndFindResult(s);
                
            }
            // update saved predictions string with new guess
            savedPredictionsString = savedPredictionsString + DELIMITER + guess;
        } else {
            // save guess 
            savedPredictionsString = guess;
        }

        // add new guess and result to predictions
        player.appendNewGuessAndFindResult(guess);
        player.updateAllSubpredictions();
        

        // checks if prediction wins, checks if guess limit hit
        player.checkAllPredictionsForWin();
        player.checkAndUpdateLimitHit();

        // logging information
        // logger.log(Level.INFO, "answer is: " + player.getAnswer());
        for (Prediction prediction:player.getPredictions()) {
            logger.log(Level.INFO, "Result for guess %s is %s".formatted(prediction.getWordString(), prediction.getResultString()));
        }
        // logger.log(Level.INFO, "limit hit? " + player.isLimitHit());


        // update model with all attributes
        model.addAttribute("playerObj", player);
        model.addAttribute("answer", player.getAnswer());
        model.addAttribute("savedPredictionsString", savedPredictionsString);
        model.addAttribute("previousGuessInvalid", false);
        return "index";
    }

    @GetMapping("/new")
    String resetForm() {
        return "index";
    }
}
