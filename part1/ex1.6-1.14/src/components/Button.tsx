interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export default function Button({ title, ...props }: Props) {
  return <button {...props}>{title}</button>;
}
