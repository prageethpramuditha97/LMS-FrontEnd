import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import type { Tile } from './data'

type FeatureCardProps = {
  tile: Tile
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ tile }) => (
  <a
    href="#"
    className="relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-colors duration-150 hover:border-brand/40"
  >
    {tile.badge && (
      <span className="absolute right-3 top-3 rounded-full bg-[#c2321c] px-2.5 py-0.5 text-xs font-bold text-white">
        {tile.badge}
      </span>
    )}
    <img src={tile.img} alt="" className="h-48 w-full object-cover lg:h-56" />
    <div className="flex flex-1 flex-col p-5">
      <h2 className="text-base font-bold">{tile.title}</h2>
      <p className="mt-1.5 text-sm text-muted">{tile.body}</p>
      <span className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-medium text-brand">
        {tile.link} <ArrowUpRight size={15} />
      </span>
    </div>
  </a>
)
