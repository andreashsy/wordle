package wordle.java.model;

public class Prediction {
    private String word;
    private String result;

    public String getWord() {
        return this.word;
    }

    public void setWord(String word) {
        this.word = word;
    }

    public String getResult() {
        return this.result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public void appendResult(String character) {
        this.result += character;
    }
}
