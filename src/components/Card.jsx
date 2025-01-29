import React, { useEffect, useState } from 'react'
import { Heart, HeartOff } from 'lucide-react';

const Card = ({ title }) => {
    const [hasLiked, setHasLiked] = useState(false);

    useEffect(() => {
        console.log(`${title} has been liked: ${hasLiked}`);
    }, [hasLiked]);


    return (
        <div className='max-w-sm bg-[#2A2E32] p-4 rounded-md mb-3 flex items-center justify-between'>
            <h1 className='text-slate-200'>{title}</h1>
            <button onClick={() => setHasLiked(!hasLiked)} className='text-red-300 cursor-pointer'>
                {hasLiked ? <HeartOff /> : <Heart />}
            </button>
        </div>
    )
}

export default Card