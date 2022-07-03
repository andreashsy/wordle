package wordle.backend.redis.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import wordle.backend.redis.repositories.RedisRepo;
import static wordle.backend.redis.Constants.*;

import java.util.List;
import java.util.Optional;

@Service
public class WordlistService {
    @Autowired
    RedisRepo redisRepo;

    public void pushAddWord(String word) {
        redisRepo.save(REDIS_ADD_KEY, word);
    }

    public void pushRemoveWord(String word) {
        redisRepo.save(REDIS_REMOVE_KEY, word);
    }

    public List<String> getAddWordList() {
        Optional<List<String>> opt = redisRepo.getList(REDIS_ADD_KEY);
        return opt.get();
    }

    public List<String> getRemoveWordList() {
        Optional<List<String>> opt = redisRepo.getList(REDIS_REMOVE_KEY);
        return opt.get();
    }
}
