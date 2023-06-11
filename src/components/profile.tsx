'use client'
import Image from "next/image";
import { UserCircle } from 'lucide-react'
import { useEffect, useState } from "react";
import axios from "axios";

interface UserProps {
  display_name: string;
  id?: string;
  images: { url: string }[];
}

export default function Profile() {
  const [userData, setUserData] = useState<UserProps>()
  useEffect(() => {
    const getCurrentUserProfile = async () => {
      // Obter o token de acesso do localStorage
      const accessToken = localStorage.getItem('access_token');
      const url = 'https://api.spotify.com/v1/me'

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setUserData(response.data)
      console.log(userData?.images[0].url)
    }
    getCurrentUserProfile()
  }, [])

  return (
    <div className="h-screen w-[300px] border-r border-green-400">
      <div className="flex flex-col gap-4 items-center mt-4">
        {userData?.images[0].url ?
            <Image src={userData?.images[0].url} style={{borderRadius: '100%'}} width={60} height={500} alt={'Avatar perfil Spotify'} />
          :
          <UserCircle />
        }
        <span>{userData?.display_name}</span>
      </div>

    </div>
  )
}