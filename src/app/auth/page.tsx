'use client'
import SpotifyLogo from '../assets/spotify.svg'
import Image from "next/image";

export default function Auth() {
  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const redirectUri = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI;

  return (
    <main className="flex flex-col items-center mt-32 gap-20">
      <Image src={SpotifyLogo} width={500} alt='Logo Spotify'/>
       <a href={`https://accounts.spotify.com/pt-BR/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=user-read-playback-state`}>
        <button className='text-xl px-20 py-6 bg-zinc-950 border border-green-600 rounded-full shadow-md hover:shadow-green-400 transition-all duration-300'>
          Autorizar acesso
        </button>
        </a>
    </main>
  )
}
