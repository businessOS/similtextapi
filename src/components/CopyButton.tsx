'use client'
import { cn } from '@/lib/utils'
import { Copy } from 'lucide-react'
import { ButtonHTMLAttributes, FC } from 'react'
import { Button } from './ui/Button'
import { toast } from './ui/toast'

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    valueToCopy: string
}

const CopyButton: FC<CopyButtonProps> = ({ valueToCopy, className, ...props }) => {
    return (
        <Button {...props} onClick={() => {
            navigator.clipboard.writeText(valueToCopy)
            toast({
                title: 'Copiad',
                message: 'API Key copied to clipboard',
                type: 'success',
            })
        }}
            variant='ghost'
            className={className}>
            <Copy className='H-5 W-5' />
        </Button>
    )
}

export default CopyButton