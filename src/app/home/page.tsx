import PlayerNow from "@/components/player";
import Profile from "@/components/profile";

export default function Home() {
    return (
      <main className="flex h-screen">
        <Profile />
        <div className="flex flex-1 justify-center mt-6">
          <PlayerNow />
        </div>
      </main>
    )
  }
  