import React from "react";
import { styled } from "styled-components";

const WeatherInfoCard = ({ data }) => {
  const {
    weather: [{ description }],
    main: { temp, feels_like, temp_min, temp_max },
    clouds: { all },
    dt_txt,
  } = data;

  return (
    <St.WeatherCardContainer>
      <St.WeatherCardTitle>
        <h3>{dt_txt.slice(5, 10)}</h3>
      </St.WeatherCardTitle>
      <St.WeatherCardItems>
        <span>현재 온도</span>
        <p>{temp}</p>
      </St.WeatherCardItems>
      <St.WeatherCardItems>
        <span>체감 기온</span>
        <p>{feels_like}</p>
      </St.WeatherCardItems>
      <St.WeatherCardItems>
        <span>최저/최고 온도</span>
        <p>
          {temp_min} / {temp_max}
        </p>
      </St.WeatherCardItems>
      <St.WeatherCardItems>
        <span>구름</span>
        <p> {all} %</p>
      </St.WeatherCardItems>
    </St.WeatherCardContainer>
  );
};

export default WeatherInfoCard;

const St = {
  WeatherCardContainer: styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 3rem;
    background-color: ${({ theme }) => theme.colors.mint};
    border-radius: 1rem;
  `,

  WeatherCardTitle: styled.header`
    width: 100%;
    text-align: center;
    & > h3 {
      color: ${({ theme }) => theme.colors.white};
      font-size: 3rem;
      font-weight: ${({ theme }) => theme.fontWeights.bold};
    }
  `,

  WeatherCardItems: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 1rem;
    & > * {
      font-size: 1.8rem;
      font-weight: ${({ theme }) => theme.fontWeights.normal};
    }
  `,
};
