import styled, { css, keyframes } from 'styled-components'
import type { Keyframes } from 'styled-components/dist/types'

import type { ColoredBorderContainerProps } from './types'

const floatAnimation = (distance: number): Keyframes => keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-${distance}px);
  }
  100% {
    transform: translateY(0px);
  }
`

const glow = keyframes`
  0% {
    background-position: 0 0;
  }

  50% {
    background-position: 100% 0;
  }

  100% {
    background-position: 0 0;
  }
`
const createGradient = (colors: string[]): string => {
  return `linear-gradient(45deg, ${colors.join(', ')})`
}

const gradientStyles = css<ColoredBorderContainerProps>`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${(props: ColoredBorderContainerProps) =>
    createGradient(props.colors || ['#000', '#fff'])};
  background-size: 400%;
  z-index: -1;
  animation: ${glow} 10s linear infinite;
  width: 100%;
  border-radius: 8px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;

  max-height: 700px;
  width: 1000px;
  height: 100vh;
`

export const WorldBarWrapper = styled.div`
  flex: 1;

  animation: ${floatAnimation(20)} 6s ease-in-out infinite;
`

export const ColoredBorderContainer = styled.div<ColoredBorderContainerProps>`
  width: 100%;
  position: relative;
  border-radius: 8px;
  padding: 4px;

  & > div {
    display: flex;

    padding: 20px;

    height: 100%;
    width: 100%;
    border-radius: 4px;
    background: #222;

    -webkit-box-shadow: inset 0px 0px 15px 5px rgba(0, 0, 0, 0.6);
    -moz-box-shadow: inset 0px 0px 15px 5px rgba(0, 0, 0, 0.6);
    box-shadow: inset 0px 0px 15px 5px rgba(0, 0, 0, 0.6);
  }

  &::before {
    ${gradientStyles}
  }

  ${props =>
    props.showAfter &&
    css`
      &::after {
        ${gradientStyles}
        filter: blur(25px);
        transform: translate3d(0, 0, 0);
      }
    `}
`

export const WorldBar = styled.div`
  & > div {
    display: flex;
    position: absolute;
    z-index: 99;

    width: 100%;

    top: 50%;
    left: 50%;

    translate: -50% -50%;

    padding: 0px 30px;

    & > div {
      height: 8px;
      border-radius: 8px;
    }

    & > div:first-child {
      width: 20%;

      background-color: rgba(220, 220, 220, 1);
    }
    & > div:last-child {
      width: 100%;

      background-color: rgba(0, 0, 0, 1);
    }
  }
`

export const WorldLevelList = styled.div`
  display: flex;

  gap: 40px;
  margin: 0px auto;

  & > div {
    font-family: 'Minecraft', sans-serif;
    font-size: 40px;
    font-weight: 500;

    text-shadow: 2px 2px 1px rgba(120, 120, 120, 1);
  }
`
