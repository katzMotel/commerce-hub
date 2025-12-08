interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
  }
  
  export function Card({ children, className = '', hover = false }: CardProps) {
    return (
      <div 
        className={`
          bg-gray-50 dark:bg-[#1a1a1a]
          border border-gray-200 dark:border-[#333333]
          rounded-lg 
          ${hover ? 'hover:bg-gray-100 dark:hover:bg-[#2a2a2a] transition-colors cursor-pointer' : ''}
          ${className}
        `}
      >
        {children}
      </div>
    );
  }     