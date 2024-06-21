package nicolas.testprogramacion.controller;

import lombok.RequiredArgsConstructor;
import nicolas.testprogramacion.dto.ColumnDTO;
import nicolas.testprogramacion.dto.SysTypesDTO;
import nicolas.testprogramacion.dto.TablesDTO;
import nicolas.testprogramacion.service.imp.SqlServiceImpl;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.sql.DataSource;
import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class SqlServerController {
    private final SqlServiceImpl sqlService;
    @GetMapping("/tables")
    public List<TablesDTO> getTables(){
        return sqlService.tablesSys();
    }
    @GetMapping("/columns")
    public List<ColumnDTO> getColumns(){
        return sqlService.columnsSys();
    }
    @CrossOrigin(origins = "*")
        @GetMapping("/systypes")
    public List<SysTypesDTO> getSysTypes(){
        return sqlService.sysTypesSys();
    }
}
