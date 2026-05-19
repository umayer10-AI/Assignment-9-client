"use client"
import { Data } from '@/context/Context';
import { Label, ListBox, Select } from '@heroui/react';
import React, { useContext } from 'react';

const SelectedData = () => {

    const {setSort} = useContext(Data)

    return (
        <Select className="w-[256px]" placeholder='Select'>
      <Label>State</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item onClick={() => setSort("high")} id="high" textValue="High">
            High to Low
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item onClick={() => setSort("low")} id="delaware" textValue="Low">
            Low to high
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item onClick={() => setSort("normal")} id="default" textValue="Default">
            Default
            <ListBox.ItemIndicator />
          </ListBox.Item>

        </ListBox>
      </Select.Popover>
    </Select>
    );
};

export default SelectedData;