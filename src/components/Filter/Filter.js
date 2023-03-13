import styles from './filter.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/filter/filter-selectors';
import { addFilter } from 'redux/filter/filter-slice';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onFilter = e => {
    const { value } = e.target;
    dispatch(addFilter(value));
  };

  return (
    <div className={styles.filter}>
      <h3 className={styles.title}>Find contact by name</h3>
      <input
        className={styles.input}
        type="text"
        name="filter"
        onChange={onFilter}
        value={filter}
      />
    </div>
  );
};

export default Filter;