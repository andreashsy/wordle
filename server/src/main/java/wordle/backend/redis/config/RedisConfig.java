package wordle.backend.redis.config;

import java.util.Optional;

import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.RedisStandaloneConfiguration;
import org.springframework.data.redis.connection.jedis.JedisClientConfiguration;
import org.springframework.data.redis.connection.jedis.JedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.StringRedisSerializer;

import static wordle.backend.redis.Constants.*;

@Configuration
public class RedisConfig {
    private final Logger logger = Logger.getLogger(RedisConfig.class.getName());
    @Value("${spring.redis.host}")
    private String redisHost;
    @Value("${spring.redis.port}")
    private Optional<Integer> redisPort;
    @Value("${spring.redis.database}")
    private String redisDatabase;

    @Bean("REDIS")
    @Scope("singleton")
    public RedisTemplate<String, String> createRedisTemplate(RedisConnectionFactory connectionFactory) {
        final RedisStandaloneConfiguration config = new RedisStandaloneConfiguration();
        logger.log(Level.INFO, "port >>>>>>>>>>> " + redisPort);
        logger.log(Level.INFO, "hostname >>>>>>>>>> " + redisHost);

        config.setHostName(redisHost);
        config.setPort(redisPort.get());
        config.setDatabase(Integer.valueOf(redisDatabase));
        if (REDISPASSWORD != null) {
            logger.log(Level.INFO, "Setting Redis Password...");
            config.setPassword(REDISPASSWORD);
        } else {
            logger.log(Level.INFO, "Redis password not set!");
        }
        
        final JedisClientConfiguration jedisClient = JedisClientConfiguration.builder().build();
        final JedisConnectionFactory jedisFac = new JedisConnectionFactory(config, jedisClient);
        jedisFac.getPoolConfig().setMaxIdle(30);
        jedisFac.getPoolConfig().setMinIdle(10);
        jedisFac.afterPropertiesSet();
        final RedisTemplate<String, String> template = new RedisTemplate<String, String>();
        template.setConnectionFactory(jedisFac);

        template.setKeySerializer(new StringRedisSerializer());
        template.setValueSerializer(new StringRedisSerializer());

        return template;
    }
    
}