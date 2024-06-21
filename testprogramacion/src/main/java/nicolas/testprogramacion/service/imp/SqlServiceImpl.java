package nicolas.testprogramacion.service.imp;

import lombok.AllArgsConstructor;
import nicolas.testprogramacion.dto.ColumnDTO;
import nicolas.testprogramacion.dto.SysTypesDTO;
import nicolas.testprogramacion.dto.TablesDTO;
import nicolas.testprogramacion.entities.Tables;
import nicolas.testprogramacion.repository.SqlServerRepo;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

@Service
@AllArgsConstructor
public class SqlServiceImpl implements SqlServerRepo {

    private final SqlServerRepo sqlServerRepo;
    @Override
    public List<TablesDTO> tablesSys() {
        return sqlServerRepo.tablesSys();
    }

    @Override
    public List<ColumnDTO> columnsSys() {
        return sqlServerRepo.columnsSys();
    }

    @Override
    public List<SysTypesDTO> sysTypesSys() {
        return sqlServerRepo.sysTypesSys();
    }


    @Override
    public void flush() {

    }

    @Override
    public <S extends Tables> S saveAndFlush(S entity) {
        return null;
    }

    @Override
    public <S extends Tables> List<S> saveAllAndFlush(Iterable<S> entities) {
        return List.of();
    }

    @Override
    public void deleteAllInBatch(Iterable<Tables> entities) {

    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Long> longs) {

    }

    @Override
    public void deleteAllInBatch() {

    }

    @Override
    public Tables getOne(Long aLong) {
        return null;
    }

    @Override
    public Tables getById(Long aLong) {
        return null;
    }

    @Override
    public Tables getReferenceById(Long aLong) {
        return null;
    }

    @Override
    public <S extends Tables> Optional<S> findOne(Example<S> example) {
        return Optional.empty();
    }

    @Override
    public <S extends Tables> List<S> findAll(Example<S> example) {
        return List.of();
    }

    @Override
    public <S extends Tables> List<S> findAll(Example<S> example, Sort sort) {
        return List.of();
    }

    @Override
    public <S extends Tables> Page<S> findAll(Example<S> example, Pageable pageable) {
        return null;
    }

    @Override
    public <S extends Tables> long count(Example<S> example) {
        return 0;
    }

    @Override
    public <S extends Tables> boolean exists(Example<S> example) {
        return false;
    }

    @Override
    public <S extends Tables, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return null;
    }

    @Override
    public <S extends Tables> S save(S entity) {
        return null;
    }

    @Override
    public <S extends Tables> List<S> saveAll(Iterable<S> entities) {
        return List.of();
    }

    @Override
    public Optional<Tables> findById(Long aLong) {
        return Optional.empty();
    }

    @Override
    public boolean existsById(Long aLong) {
        return false;
    }

    @Override
    public List<Tables> findAll() {
        return List.of();
    }

    @Override
    public List<Tables> findAllById(Iterable<Long> longs) {
        return List.of();
    }

    @Override
    public long count() {
        return 0;
    }

    @Override
    public void deleteById(Long aLong) {

    }

    @Override
    public void delete(Tables entity) {

    }

    @Override
    public void deleteAllById(Iterable<? extends Long> longs) {

    }

    @Override
    public void deleteAll(Iterable<? extends Tables> entities) {

    }

    @Override
    public void deleteAll() {

    }

    @Override
    public List<Tables> findAll(Sort sort) {
        return List.of();
    }

    @Override
    public Page<Tables> findAll(Pageable pageable) {
        return null;
    }
}
