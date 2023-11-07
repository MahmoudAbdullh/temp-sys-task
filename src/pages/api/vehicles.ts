import type { NextApiRequest, NextApiResponse } from 'next'
 import vehicles from '../../constant/vehicles.json'
import { Filter } from '@/types/vehicle';

function filterByTitle(q:string){
  return vehicles.filter(v=>String(v.Title).includes(q))
}

function sortVehicles(sortBy:Filter) {
  switch (sortBy) {
    case 'price':
      return vehicles.sort((current, next)=> {
        let currentPrice = parseFloat(String(current.CurrentPriceStr).replace(/,/g, ''));
        let nextPrice = parseFloat(String(next.CurrentPriceStr).replace(/,/g, ''));
        return nextPrice - currentPrice})
    case 'years':
      return vehicles.sort((current, next)=> +next.Year - +current.Year)
    case 'end-date':
      return vehicles.sort((current, next)=> current.EndDateTimestamp - next.EndDateTimestamp )
    default:
      return vehicles
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log(req.query.q);
    const q = req.query.q as string
    const sortBy = req.query.sortBy as Filter
    let data:Array<object>;
    if(!!q) {
      data = filterByTitle(q)
    }else if(!!sortBy){
      data = sortVehicles(sortBy)
    }else data = vehicles
    
    setTimeout(() => {
        res.status(200).json({ data })
    }, 500);
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}