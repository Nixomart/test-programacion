package nicolas.testprogramacion.service;

import nicolas.testprogramacion.entities.Task;

import java.util.List;

public interface TaskService {
    public List<Task> findAll();
    public void save(Task task);

    void update(Task task);

    void delete(Long id);
}
