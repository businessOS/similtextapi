'use client'
import { createApiKey } from '@/helpers/create-api-key'
import { FC, FormEvent, useState } from 'react'

import LargeHeading from '@/ui/LargeHeading'
import Paragraph from '@/ui/Paragraph'
import { toast } from '@/ui/toast'
import { Input } from '@/ui/Input'
import CopyButton from '@/components/CopyButton'
import { Button } from './ui/Button'
import { Key } from 'lucide-react'

const RequestApiKey: FC = ({ }) => {
    const [isCreating, setIsCreating] = useState<boolean>(false)
    const [apiKey, setApiKey] = useState<string | null>(null)

    const createNewApiKey = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsCreating(true)
        try {
            const generatedApiKey = await createApiKey()
            setApiKey(generatedApiKey)
        } catch (error) {
            if (error instanceof Error) {
                toast({
                    title: 'Error',
                    message: error.message,
                    type: 'error'
                })
                return
            }
            toast({
                title: 'Error',
                message: 'something wen wrong',
                type: 'error'
            })
        }
        toast({
            title: 'Sucess',
            message: 'New API Key was generated',
            type: 'success'
        })

    }
    return (
        <div className='container md:max-w-2xl'>
            <div className='flex flex-col items-center gap-6'>
                <Key className='w-12 h-12 mx-auto text-gray-400' />
                <LargeHeading>Requeast your API KEY</LargeHeading>
                <Paragraph>You haven&apos;t requested and API key yet </Paragraph>
            </div>
            <form
                onSubmit={createApiKey}
                className="mt-6 sm:flex sm:items-center"
                action='#'
            >
                <label htmlFor='emails' className='sr-only'>
                    Your API key
                </label>
                <div className="relative rounded-md shadow-sm sm:min-w-0 sm:flex-1">
                    {/* Show a copy icon if API key was generated successfully */}
                    {apiKey ? (
                        <CopyButton
                            type='button'
                            valueToCopy={apiKey}
                            className='absolute inset-y-0 right-0 animate-in fade-in' />

                    ) : null}
                    <Input
                        readOnly
                        value={apiKey ?? ''}
                        placeholder='Request an API key to display it here'
                    />
                </div>
                <div className='flex justify-center mt-6 sm:mt-0 sm:ml-4 sm:flex-shrink-0'>
                    <Button disabled={!!apiKey} isLoading={isCreating}>
                        Request key
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default RequestApiKey