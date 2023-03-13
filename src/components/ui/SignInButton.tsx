'use client'

import { signIn } from 'next-auth/react'
import { FC, useState } from 'react'
import { Button } from './Button'
import { toast } from './toast'

interface SignInButtonProps { }

const SignInButton: FC<SignInButtonProps> = ({ }) => {
    const [isLoading, setIsLoading] = useState<boolean>()

    const sigInWithGoogle = async () => {
        setIsLoading(true)
        try {
            await signIn('google')
        } catch (error) {
            toast({
                title: 'Error Signing In',
                message: 'Please try again later',
                type: 'error'
            })
        }
    }
    return <Button onClick={sigInWithGoogle}>Sign In</Button>
}

export default SignInButton