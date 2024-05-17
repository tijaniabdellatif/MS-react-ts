import styled, { RuleSet, css } from 'styled-components';

enum SizeReference {
  SMALL_SIZE = 'small',
  MEDIUM_SIZE = 'medium',
  LARGE_SIZE = 'large',
}
enum VariationReference {
  PRIMARY_VAR = 'primary',
  SECONDARY_VAR = 'secondary',
  DANGER_VAR = 'danger',
}

type Size = SizeReference.SMALL_SIZE | SizeReference.MEDIUM_SIZE | SizeReference.LARGE_SIZE;
type Variation = VariationReference.PRIMARY_VAR | VariationReference.SECONDARY_VAR | VariationReference.DANGER_VAR;

interface IButton {
  size: Size;
  variation: Variation;
}

const sizes: Record<Size, RuleSet<object>> = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations: Record<Variation, RuleSet<object>> = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

export const StyledButton = styled.button<IButton, any>`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;
