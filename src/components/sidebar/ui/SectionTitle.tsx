type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="mb-3 mt-6 first:mt-0">
      <p
        className="
          text-[11px]
          tracking-[0.2em]
          uppercase
          text-white/40
        "
      >
        {title}
      </p>
    </div>
  );
}
