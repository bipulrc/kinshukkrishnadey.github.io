import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
     <svg
      xmlns="http://www.w3.org/2000/svg" 
      aria-hidden
      className={classes(styles.monogram, className)}
      width="90"
      height="50"
      viewBox="0 0 80 40"
      ref={ref}
      {...props}
      >
      <defs>
        <clipPath id={clipId}>
          <text x="20" y="30" font-family="Arial" font-size="20" fill="black">𝒢𝑜𝓉𝒶𝑔</text>
       </clipPath>
       </defs>
       <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
       {highlight && (
         <g clipPath={`url(#${clipId})`}>
            <rect className={styles.highlight} width="100%" height="100%" />
         </g>
        )}
    </svg>
  );
});
