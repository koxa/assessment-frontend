export interface WeatherLocation {
    lon: string;
    lat: string;
    condition: string;
    conditionName: string;
    temperature: number;
    unit: string;
    location: string;
    upcomming: {
        day: string;
        condition: string;
        conditionName: string;
    }[];
}
