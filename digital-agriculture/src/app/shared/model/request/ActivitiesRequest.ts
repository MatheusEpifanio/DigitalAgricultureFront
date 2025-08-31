import { TypeActivities } from "../TypeActivities";

export interface ActivitiesRequest{
  type: TypeActivities,
  date: string,
  observations: string
}
