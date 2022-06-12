import Link from "next/link";
import styled from "styled-components";
export default function Start({ handleClick }) {
  return (
    <Link href="/meditating" passHref>
      <StyledLink onClick={handleClick}>
        I'm ready to begin
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </StyledLink>
    </Link>
  );
}

const StyledLink = styled.a`
  background-color: var(--color-darker);
  padding: var(--spacing) calc(2 * var(--spacing));
  border-radius: var(--radius);
  display: flex;
  gap: var(--spacing);
  align-items: center;
  max-width: fit-content;

  & svg {
    height: 1em;
    display: inline;
    transform: translateX(0px);
    transition: transform 400ms;
  }

  &:hover {
    text-decoration: none;
  }

  &:hover svg {
    transform: translateX(8px);
    transition: transform 300ms;
  }
`;
