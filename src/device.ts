import { useMediaQuery } from 'react-responsive';

export function device() {
  const isDesktop = useMediaQuery({ minDeviceWidth: 1224 });
  const isMobile = useMediaQuery({ maxWidth: 1224 });
  return {
    isDesktop,
    isMobile,
  };
}
