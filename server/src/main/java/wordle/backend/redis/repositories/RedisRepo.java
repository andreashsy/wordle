package wordle.backend.redis.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;


@Repository
public class RedisRepo {
    @Autowired
    @Qualifier("REDIS")
    RedisTemplate<String, String> template;

    public void save(String key, String jsonString) {
        template.opsForList().rightPush(normalise(key), jsonString);
    }

    public Optional<List<String>> getList(String key) {
        return Optional.ofNullable(template.opsForList().range(normalise(key), 0L, listLength(key)));
    }

    private String normalise(String key) {
        return key.trim().toLowerCase();
    }

    private Long listLength(String key) {
        return template.opsForList().size(normalise(key));
    }

}
