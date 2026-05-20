import Reveal from "@/components/shared/Reveal";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <Reveal as="section" className={className}>
      {children}
    </Reveal>
  );
}
