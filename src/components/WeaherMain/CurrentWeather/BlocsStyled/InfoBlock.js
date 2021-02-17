import styled from "styled-components";
import {InfoBlockBig} from "../../../../styles/common/InfoBlock";
import {colors} from "../../../../styles/variables";

export const InfoBlock = styled(InfoBlockBig)`
  height: 100px;
  padding: 12px;

  h3.block-title {
    color: ${colors.greyFontColorLight};
    margin: 0;
  }

  .content {
    height: 80px;
    display: flex;

    &.center {
      align-items: center;
    }

    &.flex-end {
      flex-direction: column;
      justify-content: flex-end;
    }
  }

  .caption {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
  }

  .value-with-unit {
    .value {
      font-size: 3rem;
    }

    .unit {
      font-size: 1.5rem;
    }
  }
`;