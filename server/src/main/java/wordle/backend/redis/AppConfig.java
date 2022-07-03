package wordle.backend.redis;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class AppConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry cors) {
        System.out.println("Cors added!!!!!");
        cors.addMapping("/api/**");
    }
    
}
