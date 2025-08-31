import { FieldsDashboardResponse } from "./FieldsDashboardResponse";

export interface PaginationResponse{
  elements: FieldsDashboardResponse[],
  totalElements: number,
  totalPages: number

}
