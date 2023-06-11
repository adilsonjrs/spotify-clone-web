'use client'
import Image from "next/image";
import { User2 } from 'lucide-react'
import { useEffect, useState } from "react";
import axios from "axios";
import Library from "./library";

interface UserProps {
  display_name: string;
  id: string;
  images: { url: string }[];
  followers: { total: number };
}

export default function Profile() {
  const [userData, setUserData] = useState<UserProps>()
  useEffect(() => {
    const getCurrentUserProfile = async () => {
      // Obter o token de acesso do localStorage
      const accessToken = localStorage.getItem('access_token');
      const url = `${process.env.NEXT_PUBLIC_SPOTIFY_API_URI}`

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setUserData(response.data)
    }
    getCurrentUserProfile()
  }, [])

  return (
      <div className="h-full w-[300px] bg-zinc-900 pl-4 pr-4 border-r border-zinc-800 shadow-md shadow-zinc-800">
        <div className="flex gap-4 items-center mt-6">
          {!userData?.images[0].url ?
            <div className="w-14 h-14 flex items-center justify-center border-2 border-green-500 rounded-full">
              <User2 size={30} strokeWidth={1} />
            </div>
            :
            <div className="w-14 h-14 flex items-center justify-center border-2 border-green-500 rounded-full">
              <Image src={userData?.images[0].url} className="rounded-full border-2 border-zinc-900" width={60} height={60} alt={'Avatar perfil Spotify'} />
            </div>
          }
          <div>
            <p className="text-base font-bold tracking-wider">{userData?.display_name}</p>
            <div className="flex gap-2 mt-2 tracking-wider">
              <span className="text-xs font-normal text-zinc-400">
                <strong className="text-zinc-200">ID:</strong> {userData?.id}
              </span>
              <span className="text-xs font-normal text-zinc-400">
                <strong className="text-zinc-200">Followers:</strong> {userData?.followers.total}
              </span>
            </div>
          </div>
        </div>

        <div className="w-full mt-8 border border-zinc-700" />

        <Library />
      </div>
  )
}