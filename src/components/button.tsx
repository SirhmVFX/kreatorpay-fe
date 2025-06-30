type ButtonProps = {
  label: string;
  type?: "primary" | "outline";
  onClick?: () => void;
};

export default function button({ label, type = "primary", onClick }: ButtonProps) {
  const base = "px-6 py-2 rounded-lg font-medium transition duration-300";
  const primary = "bg-indigo-500 text-white hover:bg-indigo-600";
  const outline = "border border-indigo-500 text-indigo-500 hover:bg-indigo-50";

  const classes = `${base} ${type === "primary" ? primary : outline}`;
  return <button onClick={onClick} className={classes}>{label}</button>;
}
