import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';
import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize2,
} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/guns-album.jpg"
                alt="capa guns"
                width={104}
                height={104}
              />
              <strong>Guns N Roses</strong>
              <button className="w-12 h-12 rounded-full flex items-center justify-center pl-1 bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/guns-album.jpg"
                alt="capa guns"
                width={104}
                height={104}
              />
              <strong>Guns N Roses</strong>
              <button className="w-12 h-12 rounded-full flex items-center justify-center pl-1 bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/guns-album.jpg"
                alt="capa guns"
                width={104}
                height={104}
              />
              <strong>Guns N Roses</strong>
              <button className="w-12 h-12 rounded-full flex items-center justify-center pl-1 bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/guns-album.jpg"
                alt="capa guns"
                width={104}
                height={104}
              />
              <strong>Guns N Roses</strong>
              <button className="w-12 h-12 rounded-full flex items-center justify-center pl-1 bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/guns-album.jpg"
                alt="capa guns"
                width={104}
                height={104}
              />
              <strong>Guns N Roses</strong>
              <button className="w-12 h-12 rounded-full flex items-center justify-center pl-1 bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/guns-album.jpg"
                alt="capa guns"
                width={104}
                height={104}
              />
              <strong>Guns N Roses</strong>
              <button className="w-12 h-12 rounded-full flex items-center justify-center pl-1 bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h1 className="font-semibold text-2xl mt-10">
            Made for Hatus Niwman
          </h1>

          <div className="grid grid-cols-8 gap-4 mt-4 ">
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/guns-album.jpg"
                alt="capa guns"
                width={104}
                height={104}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/guns-album.jpg"
                alt="capa guns"
                width={104}
                height={104}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/guns-album.jpg"
                alt="capa guns"
                width={104}
                height={104}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/guns-album.jpg"
                alt="capa guns"
                width={104}
                height={104}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/guns-album.jpg"
                alt="capa guns"
                width={104}
                height={104}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
