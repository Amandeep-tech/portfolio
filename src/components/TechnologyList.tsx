interface TechnologyListProps {
  technologies: string[];
  className?: string;
}

export const TechnologyList = ({ technologies, className = "" }: TechnologyListProps) => {
  return (
    <span className={className}>
      {technologies.map((tech, index) => (
        <span key={tech}>
          <span className="text-blue-600 dark:text-blue-400 font-semibold whitespace-nowrap mr-2 tracking-[0.05rem]">
            {tech}
          </span>
          {index < technologies.length - 1 ? ", " : ""}
        </span>
      ))}
    </span>
  );
}; 