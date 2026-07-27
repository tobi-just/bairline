export interface PlaneData {
  name: string
  tagline: string
  content: string
  entryImage: string
  coverImage: string
  floorplan: string
  floorplan_night?: string
  tourUrl: string
  rangeMap: string
  facts: {
    height: string
    width: string
    length: string
    range: string
    passengers: string
    luggage: string
    manufactured: string
    speed: string
  }
  factSheet: string
  gallery: string[]
}

const planes: Record<string, PlaneData> = {
  'Gulfstream G500': {
    name: 'Gulfstream G500',
    tagline: 'The full package for long-range flights',
    content:
      'Take a flight with our technologically most advanced and luxurious jet. The fastest aircraft in its class combined with plenty of space is your best choice for long distance flights.',
    entryImage: '/images/plane/gulfstreamG500.jpeg',
    coverImage: '/images/web/Gulfstream G500/SL7_4804_0-Bearbeitet.jpg',
    floorplan: '/images/plane/floorplan_gulfstreamG500_day.png',
    floorplan_night: '/images/plane/floorplan_gulfstreamG500_night.png',
    tourUrl: 'https://jet-pano.net/bairline/lub/',
    rangeMap: '/images/maps/map-gulfstreamG500.jpg',
    facts: {
      height: 'Height: 6.17 ft / 1.88 m',
      width: 'Width: 7.58 ft / 2.31 m',
      length: 'Length: 41.50 ft / 12.65 m',
      range: 'Flight Range: 5.300 nm / 9.816 km',
      passengers: 'Up to 13 passengers',
      luggage: 'Luggage Capacity: 175 ft³ / 4.96 m³',
      manufactured: 'Manufactured 2020',
      speed: 'Cruise Speed: Mach 0.925 / 1.105 kph',
    },
    factSheet: '/downloads/Fact sheet OELUB.pdf',
    gallery: [
      '/images/web/Gulfstream G500/SL7_4549-Bearbeitet.jpg',
      '/images/web/Gulfstream G500/SL7_4573-Bearbeitet.jpg',
      '/images/web/Gulfstream G500/SL7_4591-Bearbeitet.jpg',
      '/images/web/Gulfstream G500/SL7_4630-Bearbeitet.jpg',
      '/images/web/Gulfstream G500/SL7_4726-Bearbeitet.jpg',
      '/images/web/Gulfstream G500/SL7_4561-Bearbeitet.jpg',
      '/images/web/Gulfstream G500/SL7_4636-Bearbeitet.jpg',
      '/images/web/Gulfstream G500/SL7_4735-Bearbeitet.jpg',
      '/images/web/Gulfstream G500/SL7_4585-Bearbeitet.jpg',
      '/images/web/Gulfstream G500/SL7_4732-Bearbeitet.jpg',
      '/images/web/Gulfstream G500/SL7_4585_2-Bearbeitet.jpg',
      '/images/web/Gulfstream G500/SL7_4579_2-Bearbeitet.jpg',
      '/images/web/Gulfstream G500/SL7_4594-Bearbeitet.jpg',
      '/images/web/Gulfstream G500/SL7_4564-Bearbeitet.jpg',
      '/images/web/Gulfstream G500/SL7_4579-Bearbeitet.jpg',
      '/images/web/Gulfstream G500/SL7_4606-Bearbeitet.jpg',
      '/images/web/Gulfstream G500/SL7_4600-Bearbeitet.jpg',
      '/images/web/Gulfstream G500/SL7_4612-Bearbeitet.jpg',
      '/images/web/Gulfstream G500/SL7_4663-Bearbeitet.jpg',
      '/images/web/Gulfstream G500/SL7_4681-Bearbeitet.jpg',
      '/images/web/Gulfstream G500/SL7_4762-Bearbeitet.jpg',
      '/images/web/Gulfstream G500/SL7_4618-Bearbeitet.jpg',
      '/images/web/Gulfstream G500/SL7_4549-Bearbeitet.jpg',
      '/images/web/Gulfstream G500/SL7_4708-Bearbeitet.jpg',
      '/images/web/Gulfstream G500/SL7_4555-Bearbeitet.jpg',
    ],
  },
  'Citation X': {
    name: 'Citation X',
    tagline: 'The fastest business jet in the world',
    content:
      'You would like to get as fast as possible to your destination? Then this aircraft is definitely the right choice. Flying almost at the speed of sound, the countries below you are changing in no time.',
    entryImage: '/images/plane/citationX.jpg',
    coverImage: '/images/plane/citationX.jpg',
    floorplan: '/images/plane/floorplan_citationX.png',
    floorplan_night: '/images/plane/floorplan_citationX_night.png',
    tourUrl: 'https://jetpano.eu/bairline/hub/tour.html',
    rangeMap: '/images/maps/map-citationX.gif',
    facts: {
      height: 'Height: 5.67 ft / 1.73 m',
      width: 'Width: 5.51 ft / 1.68 m',
      length: 'Length: 29.43 ft / 8.97 m',
      range: 'Flight Range: 3.000 nm / 5.556 km',
      passengers: 'Up to 9 passengers',
      luggage: 'Luggage Capacity: 70.63 ft³ / 2 m³',
      manufactured: 'Manufactured 2007',
      speed: 'Cruise Speed: Mach 0.92 / 1.100 kph',
    },
    factSheet: '/downloads/CITX Fact Sheet.pdf',
    gallery: [
      '/images/web/CitationX/SLT_0728-Bearbeitet.jpg',
      '/images/web/CitationX/SLT_0731-Bearbeitet.jpg',
      '/images/web/CitationX/SLT_0734-Bearbeitet.jpg',
      '/images/web/CitationX/SLT_0737-Bearbeitet.jpg',
      '/images/web/CitationX/SLT_0740-Bearbeitet.jpg',
      '/images/web/CitationX/SLT_0746-Bearbeitet.jpg',
    ],
  },
  'Citation CJ2+': {
    name: 'Citation CJ2+',
    tagline: 'The light jet for medium-haul flights',
    content:
      'This aircraft gives you agility at a highly competitive pricing. Quick turnarounds and good performance can be your partner in the air when choosing special destinations.',
    entryImage: '/images/web/CJ2+/SL8_9124-Bearbeitet.jpg',
    coverImage: '/images/web/CJ2+/SL8_9121-Bearbeitet.jpg',
    floorplan: '/images/plane/floorplan_citationCJ2+.png',
    tourUrl: 'https://jet-pano.net/bairline/fbc/',
    rangeMap: '/images/maps/map-citationCJ2.gif',
    facts: {
      height: 'Height: 4.75 ft / 1.45 m',
      width: 'Width: 4.83 ft / 1.47 m',
      length: 'Length: 18.5 ft / 5.64 m',
      range: 'Flight Range: 1.300 nm / 2.407 km',
      passengers: 'Up to 7 passengers',
      luggage: 'Luggage Capacity: 70 ft³ / 1.98 m³',
      manufactured: 'Manufactured 2012',
      speed: 'Cruise Speed: Mach 0.72 / 764 kph',
    },
    factSheet: '/downloads/Fact sheet OEFUX.pdf',
    gallery: [
      '/images/web/CJ2+/SL8_9016-Bearbeitet.jpg',
      '/images/web/CJ2+/SL8_9022-Bearbeitet.jpg',
      '/images/web/CJ2+/SL8_9025-Bearbeitet.jpg',
      '/images/web/CJ2+/SL8_9031-Bearbeitet.jpg',
      '/images/web/CJ2+/SL8_9034-Bearbeitet.jpg',
      '/images/web/CJ2+/SL8_9037-Bearbeitet.jpg',
      '/images/web/CJ2+/SL8_9040-Bearbeitet.jpg',
      '/images/web/CJ2+/SL8_9043-Bearbeitet.jpg',
      '/images/web/CJ2+/SL8_9049-Bearbeitet.jpg',
      '/images/web/CJ2+/SL8_9052-Bearbeitet.jpg',
      '/images/web/CJ2+/SL8_9055-Bearbeitet.jpg',
      '/images/web/CJ2+/SL8_9058-Bearbeitet.jpg',
      '/images/web/CJ2+/SL8_9061-Bearbeitet.jpg',
      '/images/web/CJ2+/SL8_9070-Bearbeitet.jpg',
      '/images/web/CJ2+/SL8_9082-Bearbeitet.jpg',
      '/images/web/CJ2+/SL8_9085-Bearbeitet.jpg',
      '/images/web/CJ2+/SL8_9088-Bearbeitet.jpg',
      '/images/web/CJ2+/SL8_9091-Bearbeitet.jpg',
      '/images/web/CJ2+/SL8_9094-Bearbeitet.jpg',
      '/images/web/CJ2+/SL8_9097-Bearbeitet.jpg',
      '/images/web/CJ2+/SL8_9100-Bearbeitet.jpg',
      '/images/web/CJ2+/SL8_9106-Bearbeitet.jpg',
      '/images/web/CJ2+/SL8_9115-Bearbeitet.jpg',
      '/images/web/CJ2+/SL8_9121-Bearbeitet.jpg',
      '/images/web/CJ2+/SL8_9124-Bearbeitet.jpg',
      '/images/web/CJ2+/SL8_9136-Bearbeitet.jpg',
      '/images/web/CJ2+/SL8_9142-Bearbeitet.jpg',
    ],
  },
}

export function usePlanes() {
  const planeList = Object.values(planes)

  function getPlane(name: string): PlaneData | undefined {
    return planes[name]
  }

  function getNextPlane(name: string): PlaneData {
    const i = planeList.findIndex((p) => p.name === name)
    const next = i + 1 >= planeList.length ? 0 : i + 1
    return planeList[next]
  }

  function getPrevPlane(name: string): PlaneData {
    const i = planeList.findIndex((p) => p.name === name)
    const prev = i - 1 < 0 ? planeList.length - 1 : i - 1
    return planeList[prev]
  }

  return { planes, planeList, getPlane, getNextPlane, getPrevPlane }
}
