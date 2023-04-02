import Link from "next/link";

export default function withLink(Component: React.FunctionComponent) {
  // eslint-disable-next-line react/display-name
  return (props: any) => (
    <Link href={props.href}>
      <Component {...props} />
    </Link>
  );
}
