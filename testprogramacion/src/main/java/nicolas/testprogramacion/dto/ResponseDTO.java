package nicolas.testprogramacion.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Builder
public class ResponseDTO {
    private Integer status;
    private String message;
    private Object payload;
}
