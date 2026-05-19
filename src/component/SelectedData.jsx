import { Label, ListBox, Select } from '@heroui/react';
import React from 'react';

const SelectedData = () => {
    return (
        <Select className="w-[256px]" placeholder='Select'>
      <Label>State</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item id="high" textValue="High">
            High to Low
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="delaware" textValue="Low">
            Low to high
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="default" textValue="Default">
            Default
            <ListBox.ItemIndicator />
          </ListBox.Item>

        </ListBox>
      </Select.Popover>
    </Select>
    );
};

export default SelectedData;