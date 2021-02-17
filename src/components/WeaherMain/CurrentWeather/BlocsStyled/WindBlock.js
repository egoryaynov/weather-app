import styled from "styled-components";
import {InfoBlock} from "./InfoBlock";

export const WindBlock = styled(InfoBlock)`
  .content {
    height: 72px;
  }

  .wind {
    &-title {
      display: flex;
    }
  }
`;