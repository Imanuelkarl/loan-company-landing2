import React from "react";
import styled from "styled-components";

interface SpacerProps {
  height?: number; // custom height in px
  fromHeader?: boolean; // use header height automatically
}

const SpacerWrapper = styled.div<{ height?: number; fromHeader?: boolean }>`
  height: ${({ fromHeader, height }) =>
    fromHeader ? "var(--header-height)" : `${height || 20}px`};
  width: 100%;
`;

/**
 * Spacer: creates empty vertical space.
 * @param height - custom height in px (default 20)
 * @param fromHeader - if true, uses --header-height from CSS
 */
const Spacer: React.FC<SpacerProps> = ({ height, fromHeader = false }) => {
  return <SpacerWrapper height={height} fromHeader={fromHeader} />;
};

export default Spacer;
