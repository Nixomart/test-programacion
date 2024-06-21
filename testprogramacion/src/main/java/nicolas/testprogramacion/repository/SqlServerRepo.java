package nicolas.testprogramacion.repository;

import nicolas.testprogramacion.dto.ColumnDTO;
import nicolas.testprogramacion.dto.SysTypesDTO;
import nicolas.testprogramacion.dto.TablesDTO;
import nicolas.testprogramacion.entities.Tables;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SqlServerRepo extends JpaRepository<Tables, Long> {
    @Query(value = "SELECT name ,object_id  FROM sys.tables", nativeQuery = true)
    List<TablesDTO> tablesSys();
    @Query(value = "SELECT column_id, name, object_id, system_type_id FROM sys.columns", nativeQuery = true)
    List<ColumnDTO> columnsSys();

    @Query(value = "SELECT TOP 20 name , system_type_id FROM sys.columns limit ", nativeQuery = true)
    List<SysTypesDTO> sysTypesSys ();

}
