'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface CurrentArtistProps extends ItemProps {}

interface ItemProps {
    item: {
        artists: {
            name: string,
            href: string,
        },
        name: string,
    }
}

export default function PlayerNow() {
    const [currentArtist, setCurrentArtist] = useState<CurrentArtistProps>();
    
    useEffect(() => {
        const getPlaybackState = async () => {
            // Obter o token de acesso do localStorage
            const accessToken = localStorage.getItem('access_token');
            const url = `${process.env.NEXT_PUBLIC_SPOTIFY_API_URI}/player/currently-playing`
      
            const response = await axios.get(url, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            });
            setCurrentArtist(response.data)
            console.log(currentArtist?.item.artists.href)
          }
          getPlaybackState()
    },[])
    return(
        <div className="w-600 h-96 border border-zinc-700 shadow-lg shadow-green-400 rounded-lg">
            {/* Dados do artista */}
            <div>

            </div>

            {/* Player */}
            <div>

            </div>
            
        </div>
    )
}