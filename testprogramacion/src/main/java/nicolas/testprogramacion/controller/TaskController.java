package nicolas.testprogramacion.controller;

import lombok.AllArgsConstructor;
import nicolas.testprogramacion.dto.ResponseDTO;
import nicolas.testprogramacion.entities.Task;
import nicolas.testprogramacion.service.TaskService;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class TaskController {
    private final TaskService taskService;
    @GetMapping("/allTask")
    public ResponseDTO findAll() {
        return ResponseDTO.builder()
                .status(200)
                .message("OK")
                .payload(taskService.findAll())
                .build();
    }

    @PostMapping("/task")
    public ResponseDTO save(@RequestBody Task task){
        taskService.save(task);
        return ResponseDTO.builder()
                .status(200)
                .message("OK")
                .payload(task)
                .build();
    }

    @PutMapping("/editTask")
    public ResponseDTO put(@RequestBody Task task){
        taskService.update(task);
        return ResponseDTO.builder()
                .status(200)
                .message("OK")
                .payload(task)
                .build();
    }
    @DeleteMapping("/deleteTask/{id}")
    public ResponseDTO delete(@PathVariable Long id){
        taskService.delete(id);
        return ResponseDTO.builder()
                .status(200)
                .message("OK")
                .payload(id)
                .build();
    }
}
