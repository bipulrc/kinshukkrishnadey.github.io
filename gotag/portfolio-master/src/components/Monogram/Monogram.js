import { forwardRef, useId } from 'react';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <img src={"static/thegotag_logo.png"} alt="Logo" height="90px" style={{ marginTop: "-27px" }} />
  );
});
