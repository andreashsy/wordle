package wordle.backend.redis;

public class Constants {
    public static final String REDISPASSWORD = System.getenv("RedisPwd");
    public static final String REDIS_ADD_KEY = "AddWord";
    public static final String REDIS_REMOVE_KEY = "RemoveWord";
    public static final String REDIS_COMMENT_KEY = "Comments";
}
