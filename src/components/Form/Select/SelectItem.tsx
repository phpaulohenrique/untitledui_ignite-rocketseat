'use client'
import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'

export type SelectItemProps = Select.SelectItemProps & {
    text: string
}

export function SelectItem({ text, ...props }: SelectItemProps) {
    return (
        <Select.Item
            className="flex items-center gap-2 px-3 py-2.5 justify-between outline-none data-[highlighted]:bg-violet-100/40"
            {...props}
        >
            <Select.ItemText className="text-black">{text}</Select.ItemText>
            <Select.ItemIndicator>
                <Check className="h-5 w-5 text-violet-700" />
            </Select.ItemIndicator>
        </Select.Item>
    )
}
