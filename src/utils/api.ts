import { API_URL } from '../const';
import { WeatherLocation } from '../types/api';
import { WeatherOptions } from '../types/component';
import { Page } from '../types/page';
import { fetch } from './fetch';

export function getPageFromId(id: string) {
    return fetch<Page>(`${API_URL}/page/${id}`);
}

export function getWeatherLocation({ lat, lon }: WeatherOptions) {
    return fetch<WeatherLocation>(`${API_URL}/integration/weather?lat=${lat}&lon=${lon}`);
}
