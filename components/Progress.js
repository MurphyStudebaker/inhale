import styled from "styled-components";

export default function Progress({ duration, secondsLeft }) {
  return (
    <ProgressWrapper>
      <Bar
        style={{
          "--progress": `${(1 - secondsLeft / (duration * 60)) * 100}%`,
        }}
      />
    </ProgressWrapper>
  );
}

const ProgressWrapper = styled.div`
  --bar-height: 40px;
  width: 100%;
  height: var(--bar-height);
  position: relative;
`;

const Bar = styled.div`
  height: var(--bar-height);
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: var(--color-darker);
  clip-path: polygon(0% 0%, var(--progress) 0%, var(--progress) 100%, 0% 100%);
  transition: clip-path 1s linear;
`;
