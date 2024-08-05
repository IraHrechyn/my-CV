import { Injectable } from '@angular/core';
import {AppFiltersModal} from "../types/app-filters.modal";
import {AppPagination} from "../types/app-pagination.modal";
import {CardData} from "../types/card-data.interface";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  filter: AppFiltersModal;
  modal = false;
  pagination: AppPagination;
  movieData: CardData[]=[];
  selectedMovie!: CardData | null;

  constructor() {
    this.filter = new AppFiltersModal();
    this.pagination = new AppPagination();
  }
}
