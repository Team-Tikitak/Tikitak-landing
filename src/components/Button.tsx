import { type ComponentProps } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const button = tv({
  base: 'inline-block text-center font-bold transition hover:-translate-y-0.5',
  variants: {
    variant: {
      primary: 'bg-brand text-white hover:shadow-brand/30 hover:shadow-xl hover:brightness-95',
      white: 'text-brand-dark shadow-brand-dark/20 bg-white shadow-lg hover:shadow-xl',
    },
    size: {
      sm: 'rounded-full px-4 py-2 text-sm',
      lg: 'rounded-2xl px-8 py-4',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'lg',
  },
});

type ButtonProps = ComponentProps<'a'> & VariantProps<typeof button>;

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return <a className={button({ variant, size, className })} {...props} />;
}
