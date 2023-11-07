import v from '@/constant/vehicles.json'
type Vehicle = typeof v[0]

export type Filter = 'price' | 'years' | 'end-date'

export default Vehicle