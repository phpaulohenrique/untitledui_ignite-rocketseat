import { ComponentProps } from 'react'

type InputPrefixProps = ComponentProps<'div'>

export function InputPrefix(props: InputPrefixProps) {
    return <div {...props} />
}

type InputControlProps = ComponentProps<'input'>

export function InputControl(props: InputControlProps) {
    return (
        <input
            className="w-full border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"
            {...props}
        />
    )
}

export type InputRootProps = ComponentProps<'div'>

export function InputRoot(props: InputRootProps) {
    return (
        <div
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus-within:border-violet-300 focus-within:ring-2 focus-within:ring-violet-100"
            {...props}
        />
    )
}