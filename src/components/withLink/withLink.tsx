
import Link from 'next/link'

export default function withLink(Component: React.ComponentType<any>) {
  // eslint-disable-next-line react/display-name
  return (props) => (<Link href={props.href}>
    <Component {...props} />
  </Link>)
}