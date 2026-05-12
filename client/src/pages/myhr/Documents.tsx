import React from 'react'
import * as Select from '@radix-ui/react-select';
import { ChevronDown, Check } from 'lucide-react';
const Documents = () => {
  return (
    <div className="p-10">
      <Select.Root>
        <Select.Trigger className="flex h-10 w-56 items-center justify-between rounded-md border border-gray-300 bg-white px-3 text-sm shadow-sm">
          <Select.Value placeholder="Select a country" />
          
          <Select.Icon>
            <ChevronDown size={18} />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className="overflow-hidden rounded-md border bg-white shadow-lg">
            <Select.Viewport className="p-1">

              <Select.Item  value="india">
                <Select.ItemText>India</Select.ItemText>
                <Select.ItemIndicator>
                  <Check size={16} />
                </Select.ItemIndicator>
              </Select.Item>

              <Select.Item value="usa">
                <Select.ItemText>USA</Select.ItemText>
                <Select.ItemIndicator>
                  <Check size={16} />
                </Select.ItemIndicator>
              </Select.Item>

              <Select.Item value="uk">
                <Select.ItemText>United Kingdom</Select.ItemText>
                <Select.ItemIndicator>
                  <Check size={16} />
                </Select.ItemIndicator>
              </Select.Item>

            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}

export default Documents
