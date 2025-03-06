'use client';
import { useRouter } from 'next/navigation';

export default function AnimatedLink({ href, className, children }) {
  const router = useRouter();

  const handleClick = async (e) => {
    e.preventDefault();
    // Wait for animation to complete (300ms)
    await new Promise(resolve => setTimeout(resolve, 300));
    router.push(href);
  };

  return (
    <a 
      href={href}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
} 