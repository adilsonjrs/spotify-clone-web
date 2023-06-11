
import Link from 'next/link'

import { Key } from 'lucide-react'

export default function Library() {
    

    return (
        <Link href={'/'}>
            <div className='flex items-center gap-4 mt-5'>
                <Key />
                <p className='mt-1'>Autorizar acesso</p>
            </div>
        </Link>
    )
}