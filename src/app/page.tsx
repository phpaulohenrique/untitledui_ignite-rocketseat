import { SettingsTabs } from '@/components/SettingsTabs'
import { InputControl, InputPrefix, InputRoot } from '../components/Input'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import * as FileInput from '@/components/Form/FileInput'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { TextArea } from '@/components/Form/TextArea'
import { Button } from '@/components/Button'

export default function Home() {
    return (
        <>
            <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

            <SettingsTabs />

            <div className="mt-6 flex flex-col ">
                <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
                    <div className="space-y-1">
                        <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
                        <span className="text-sm text-zinc-500">
                            Update your photo and personal details here.
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button variant="outline" type="button">
                            Cancel
                        </Button>
                        <Button type="submit" form="settings" variant="primary">
                            Save
                        </Button>
                    </div>
                </div>

                <form
                    action=""
                    id="settings"
                    className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
                >
                    <div className="grid grid-cols-form gap-3">
                        <label htmlFor="firstName" className="text-sm font-medium text-zinc-700">
                            Name
                        </label>

                        <div className="grid gap-6 grid-cols-2">
                            <InputRoot>
                                <InputControl id="firstName" defaultValue="Paulo" />
                            </InputRoot>

                            <InputRoot>
                                <InputControl defaultValue="Henrique" />
                            </InputRoot>
                        </div>
                    </div>

                    <div className="grid grid-cols-form gap-3 pt-5">
                        <label htmlFor="email" className="text-sm font-medium text-zinc-700">
                            Email
                        </label>

                        <InputRoot>
                            <InputPrefix className="h-5 w-5 text-zinc-500">
                                <Mail />
                            </InputPrefix>
                            <InputControl
                                id="email"
                                type="email"
                                defaultValue="paulo.henrique1080p@gmail.com"
                            />
                        </InputRoot>
                    </div>

                    <div className="grid grid-cols-form gap-3 pt-5">
                        <label htmlFor="photo" className="text-sm font-medium text-zinc-700 ">
                            Your photo
                            <span className="block mt-0.5 text-sm font-normal text-zinc-400">
                                This will be displayed on your profile.
                            </span>
                        </label>

                        <FileInput.Root className="flex items-start gap-5">
                            <FileInput.ImagePreview />
                            <FileInput.Trigger />
                            <FileInput.Control />
                        </FileInput.Root>
                    </div>

                    <div className="grid grid-cols-form gap-3 pt-5">
                        <label htmlFor="role" className="text-sm font-medium text-zinc-700">
                            Role
                        </label>

                        <InputRoot>
                            <InputControl id="role" defaultValue="Software developer" />
                        </InputRoot>
                    </div>

                    <div className="grid grid-cols-form gap-3 pt-5">
                        <label htmlFor="country" className="text-sm font-medium text-zinc-700">
                            Country
                        </label>

                        <Select placeholder="Select a country....">
                            <SelectItem value="br" text="Brazil" />
                            <SelectItem value="us" text="United States" />
                        </Select>
                    </div>

                    <div className="grid grid-cols-form gap-3 pt-5">
                        <label htmlFor="timezone" className="text-sm font-medium text-zinc-700">
                            Timezone
                        </label>
                        <Select placeholder="Select a timezone....">
                            <SelectItem value="utc8" text="Pacific Standard Time (UTC-08:00)" />
                            <SelectItem value="utc3" text="America São Paulo (UTC-03:00)" />
                        </Select>
                    </div>

                    <div className="grid grid-cols-form gap-3 pt-5">
                        <label htmlFor="bio" className="text-sm font-medium text-zinc-700 ">
                            Bio
                            <span className="block mt-0.5 text-sm font-normal text-zinc-400">
                                Write a short introduction.
                            </span>
                        </label>

                        <div className="space-y-3">
                            <div className="grid gap-3 grid-cols-2">
                                <Select defaultValue="normal">
                                    <SelectItem value="normal" text="Normal text" />
                                    <SelectItem value="md" text="Markdown" />
                                </Select>

                                <div className="flex items-center gap-1">
                                    <Button variant="ghost" type="button">
                                        <Bold className="h-5 w-5 text-zinc-500" strokeWidth={3} />
                                    </Button>

                                    <Button variant="ghost" type="button">
                                        <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                                    </Button>

                                    <Button variant="ghost" type="button">
                                        <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                                    </Button>

                                    <Button variant="ghost" type="button">
                                        <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                                    </Button>

                                    <Button variant="ghost" type="button">
                                        <ListOrdered
                                            className="h-4 w-4 text-zinc-500"
                                            strokeWidth={3}
                                        />
                                    </Button>
                                </div>
                            </div>

                            <TextArea
                                id="bio"
                                defaultValue="I am a software developer based in Campo Verde, Brazil."
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-form gap-3 pt-5">
                        <label htmlFor="projects" className="text-sm font-medium text-zinc-700 ">
                            Portfolio projects
                            <span className="block mt-0.5 text-sm font-normal text-zinc-400">
                                Share a few snippets of your work.
                            </span>
                        </label>

                        <FileInput.Root>
                            <FileInput.Trigger />
                            <FileInput.FileList />
                            <FileInput.Control multiple />
                        </FileInput.Root>
                    </div>

                    <div className="flex items-center justify-end gap-2 pt-5">
                        <Button variant="outline" type="button">
                            Cancel
                        </Button>
                        <Button type="submit" form="settings" variant="primary">
                            Save
                        </Button>
                    </div>
                </form>
            </div>
        </>
    )
}
