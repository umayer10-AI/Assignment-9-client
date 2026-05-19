import { Label, SearchField } from '@heroui/react';
import { Search } from 'lucide-react';
import React from 'react';

const SearchingData = () => {
    return (
            <div className='w-90'>
                <SearchField name="search">
      <Label>Search</Label>
      <div className='flex items-center'>
        <SearchField.Group className={'border border-cyan-600 rounded-r-none py-5'}>
        <SearchField.SearchIcon />
        <SearchField.Input className="w-70" placeholder="Search..." />
        <SearchField.ClearButton />
      </SearchField.Group>
        <button className='border rounded-r-xl py-[9px] px-4 text-white bg-linear-to-r from-cyan-700 to-cyan-500'>Search</button>
      </div>
    </SearchField>
            </div>

    );
};

export default SearchingData;