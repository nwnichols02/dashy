import * as React from 'react';
import { Link as TanStackLink } from '@tanstack/react-router';

/**
 * @ignore - internal component.
 */

export interface LinkProps extends React.ComponentProps<typeof TanStackLink> {
  history?: 'auto' | 'push' | 'replace';
}

export const Link = React.forwardRef(function Link(
  props: LinkProps,
  ref: React.ForwardedRef<HTMLAnchorElement>,
) {
  const { children, href, onClick, history, ...rest } = props;

  return (
    <TanStackLink
      ref={ref}
      to={href || '/'}
      {...rest}
      onClick={onClick}
    >
      {children}
    </TanStackLink>
  );
});
