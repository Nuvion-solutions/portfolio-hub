import type React from 'react'
import LuminaThumbnail    from './LuminaThumbnail'
import NexusThumbnail     from './NexusThumbnail'
import IronCladThumbnail  from './IronCladThumbnail'
import HargroveThumbnail  from './HargroveThumbnail'
import VerdantThumbnail   from './VerdantThumbnail'
import VeloceThumbnail    from './VeloceThumbnail'
import TideThumbnail      from './TideThumbnail'
import LuminaryThumbnail  from './LuminaryThumbnail'
import ApexThumbnail      from './ApexThumbnail'

export const THUMBNAILS: Record<string, React.ComponentType> = {
  'lumina-aesthetics':      LuminaThumbnail,
  'nexus-ai':               NexusThumbnail,
  'ironclad-home-services': IronCladThumbnail,
  'hargrove-associates':    HargroveThumbnail,
  'verdant-nyc':            VerdantThumbnail,
  'veloce-supercars':       VeloceThumbnail,
  'tide-foundation':        TideThumbnail,
  'luminary-foundation':    LuminaryThumbnail,
  'apex-aviation':          ApexThumbnail,
}
