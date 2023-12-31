import { Button } from '@/components/Button'
import { formatBytes } from '@/utils/format-bytes'
import { UploadCloud, Trash2, CheckCircle2 } from 'lucide-react'
import { VariantProps, tv } from 'tailwind-variants'

const fileItem = tv({
    slots: {
        container: 'group flex  items-start gap-4 rounded-lg border border-zinc-200 p-4',
        icon: 'rounded-full  border-4 border-violet-100 bg-violet-200 p-2 text-violet-600',
        deleteButton: '',
        progressBar: 'h-2 rounded',
    },

    variants: {
        state: {
            progress: {
                container: 'border-violet-500',
                progressBar: 'bg-violet-600',
            },
            complete: {
                container: 'border-green-500',
                progressBar: 'bg-green-600',
            },
            error: {
                container: 'bg-error-25 border-error-300',
                icon: 'border-error-50 bg-error-100 text-error-600',
                deleteButton: 'text-error-700 hover:text-error-900',
            },
        },
    },

    defaultVariants: {
        state: 'progress',
    },
})
export interface FileItemProps extends VariantProps<typeof fileItem> {
    name: string
    size: number
}

export function FileItem({ name, size, state }: FileItemProps) {
    const { container, icon, deleteButton, progressBar } = fileItem({ state })
    return (
        <div className={container()}>
            <div className={icon()}>
                <UploadCloud className="h-4 w-4" />
            </div>

            {state === 'error' ? (
                <div className="flex flex-1 flex-col items-start gap-1">
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-error-700">
                            Upload failed, please try again.
                        </span>
                        <span className="text-sm  text-error-600">{name}</span>
                    </div>

                    <button
                        type="button"
                        className="text-sm font-semibold text-error-700 hover:text-error-900"
                    >
                        Try again
                    </button>
                </div>
            ) : (
                <div className="flex flex-1 flex-col items-start gap-1">
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-zinc-700">{name}</span>
                        <span className="text-sm  text-zinc-500">{formatBytes(size)}</span>
                    </div>
                    <div className="flex w-full items-start gap-3">
                        <div className="h-2 flex-1 rounded-full bg-zinc-100">
                            <div
                                className={progressBar()}
                                style={{ width: state === 'complete' ? '100%' : '80%' }}
                            />
                        </div>

                        <span className="text-sm font-medium text-zinc-700">
                            {state === 'complete' ? '100%' : '80%'}
                        </span>
                    </div>
                </div>
            )}

            {state === 'complete' ? (
                <CheckCircle2 className="h-5 w-5 fill-green-600 text-white" />
            ) : (
                <Button variant="ghost" type="button" className={deleteButton()}>
                    <Trash2 className="h-5 w-5 " />
                </Button>
            )}
        </div>
    )
}
