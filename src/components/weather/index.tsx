/* eslint-disable indent */
import { useCallback, useEffect, useState } from 'react';
import { WeatherLocation } from '../../types/api';
import { WeatherOptions } from '../../types/component';
import { getWeatherLocation } from '../../utils/api';
import Loading from '../loading';
import classes from './styles.module.css';

type Props = WeatherOptions;

const Weather = ({ lat, lon }: Props) => {
    const [weatherLocation, setWeatherLocation] = useState<WeatherLocation>();

    const getConditionImage = useCallback((condition: string) => {
        switch (condition) {
            case 'rain':
                return <img src="/icons/rain.svg" alt="" />;
            case 'clear-day':
                return <img src="/icons/clear-day.svg" alt="" />;
            default:
                return <img src="/icons/cloudy.svg" alt="" />;
        }
    }, []);

    const getTemperature = useCallback((temperature: number, unit: string) => {
        return (
            <span className={classes.temperature}>
                {temperature}
                {unit === 'f' ? <span>&#8457;</span> : <span>&#8451;</span>}
            </span>
        );
    }, []);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                setWeatherLocation(await getWeatherLocation({ lat, lon }));
            } catch (e) {
                console.error(e);
            }
        };
        fetchWeatherData();
    }, [lat, lon]);
    return weatherLocation ? (
        <div className={`${classes.container} ${classes.card}`}>
            <div className={classes.sectionPart1}>
                <div className={classes.conditionImage}>
                    {getConditionImage(weatherLocation.condition)}
                </div>
                <div className={classes.conditionName}>
                    {getTemperature(weatherLocation.temperature, weatherLocation.unit)}
                    <span className={classes.condition}>{weatherLocation.conditionName}</span>
                </div>
            </div>
            <div className={classes.sectionPart2}>
                <div className={classes.location}>
                    <span>{weatherLocation.location}</span>
                </div>
                <div className={classes.upcommings}>
                    {weatherLocation.upcomming?.map((upcomming, key) => {
                        return (
                            <div key={key} className={classes.upcomming}>
                                <div className={`${classes.upcommingImage} ${upcomming.condition}`}>
                                    {getConditionImage(upcomming.condition)}
                                </div>
                                <span className={classes.upcommingDay}>{upcomming.day}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    ) : (
        <Loading />
    );
};

export default Weather;
