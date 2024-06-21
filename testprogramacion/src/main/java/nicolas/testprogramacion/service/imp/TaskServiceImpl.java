package nicolas.testprogramacion.service.imp;

import lombok.AllArgsConstructor;
import nicolas.testprogramacion.entities.Task;
import nicolas.testprogramacion.repository.TaskRepo;
import nicolas.testprogramacion.service.TaskService;
import org.antlr.v4.runtime.atn.SemanticContext;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class TaskServiceImpl implements TaskService {
    private final TaskRepo taskRepo;
    @Override
    public List<Task> findAll() {
        return taskRepo.findAll();
    }

    @Override
    public void save(Task task) {
        try {
            taskRepo.save(task);
        }catch (
                Exception e
        ){
            System.out.println("Error: "+e.getMessage());
        }

    }

    @Override
    public void update(Task task) {
        Optional<Task> taskFound = taskRepo.findById(task.getId());
        if (taskFound.isPresent()) {
            Task taskToUpdate = taskFound.get();
            taskToUpdate.setName(task.getName());
            taskToUpdate.setDescription(task.getDescription());
            taskToUpdate.setStatus(task.getStatus());
            taskRepo.save(taskToUpdate);
        }
    }

    @Override
    public void delete(Long id) {
        taskRepo.deleteById(id);
    }


}
