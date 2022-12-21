interface WorkCardProps {
  side: "left" | "right";
}

export function WorkCard({ side }: WorkCardProps) {
  return <div>{side}</div>;
}
