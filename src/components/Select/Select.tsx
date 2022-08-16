import { FormControl, InputLabel, MenuItem, Select as SelectBase } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import { selectData } from '../../mocks';

export default function Select() {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
      <InputLabel id='demo-select-small'>Age</InputLabel>
      <SelectBase
        labelId='demo-select-small'
        value={age}
        label='Age'
        onChange={handleChange}
        variant='outlined'
        type='text'
      >
        {selectData.map(({ value, id, icon }) => (
          <MenuItem value={value} key={id}>
            <span>{icon}</span>
            <span>{value}</span>
          </MenuItem>
        ))}
      </SelectBase>
    </FormControl>
  );
}
