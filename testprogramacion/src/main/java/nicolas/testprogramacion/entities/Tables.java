package nicolas.testprogramacion.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
public class Tables {
    @Id
    private Long id;
    private String nombre;

    private Long columnas_id;
}
