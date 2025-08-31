import { ActivitiesResponse } from "./ActivitiesResponse";

export interface FieldDetailsResponse{
  id: number,
  name: string,
  crop: string,
  areaHectares: number,
  latitude: number,
  longitude: number,
  activities: ActivitiesResponse[]
}
