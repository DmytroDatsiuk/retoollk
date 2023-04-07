import { useDispatch } from 'react-redux';
import { FilterBox, FilterInput, Label } from './Filter.styled';
import { contactFilter } from 'redux/actions';
// import { contactFilter } from 'redux/actions';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterBox>
      <Label htmlFor="findByName">
        Filter by name
        <FilterInput
          id="findByName"
          type="text"
          name="name"
          placeholder="Search contact"
          onChange={e => {
            dispatch(contactFilter(e.currentTarget.value));
          }}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
      </Label>
    </FilterBox>
  );
};
