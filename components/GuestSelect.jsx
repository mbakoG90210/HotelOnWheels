import * as React from 'react';
import {
  Select,
  SelectGroup,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const GuestSelect = () => {
  return (
    <Select>
      <SelectTrigger className='w-full'>
        <SelectValue placeholder='How many guests ?' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Guests</SelectLabel>
          <SelectItem value='1'>1</SelectItem>
          <SelectItem value='2'>2</SelectItem>
          <SelectItem value='3'>3</SelectItem>
          <SelectItem value='4'>4</SelectItem>
          <SelectItem value='5'>5</SelectItem>
          <SelectItem value='6'>6</SelectItem>
          <SelectItem value='7'>7</SelectItem>
          <SelectItem value='8'>8</SelectItem>
          <SelectItem value='9'>9</SelectItem>
          <SelectItem value='10'>10</SelectItem>
          <SelectItem value='11'>11</SelectItem>
          <SelectItem value='12'>12</SelectItem>
          <SelectItem value='13'>13</SelectItem>
          <SelectItem value='14'>14</SelectItem>
          <SelectItem value='15'>15</SelectItem>
          <SelectItem value='16'>16</SelectItem>
          <SelectItem value='17'>17</SelectItem>
          <SelectItem value='18'>18</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default GuestSelect;
