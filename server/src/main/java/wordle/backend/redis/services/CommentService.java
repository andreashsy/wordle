package wordle.backend.redis.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import wordle.backend.redis.repositories.RedisRepo;
import static wordle.backend.redis.Constants.*;

@Service
public class CommentService {
    @Autowired
    RedisRepo redisRepo;

    public void addComment(String jsonString) {
        redisRepo.save(REDIS_COMMENT_KEY, jsonString);
    }
    
}
