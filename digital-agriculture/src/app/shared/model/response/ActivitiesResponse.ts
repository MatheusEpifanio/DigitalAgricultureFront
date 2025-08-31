import {  TypeActivities } from "../TypeActivities"

export interface ActivitiesResponse{
  id: number,
  date: string,
  type: TypeActivities
  observations: string
}
