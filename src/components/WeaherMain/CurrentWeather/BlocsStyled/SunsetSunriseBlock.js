import styled from "styled-components";
import {InfoBlock} from "./InfoBlock";

export const SunsetSunriseBlock = styled(InfoBlock)`
  .content {
    p {
      margin: 0;
      display: flex;
      align-items: center;
      font-size: 1.5rem;

      &:nth-child(1) {
        margin-bottom: 7px;
      }

      img {
        width: 25px;
        height: 25px;
        margin-left: 15px;
      }
    }
  }
`;