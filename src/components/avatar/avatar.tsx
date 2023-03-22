import Image from 'next/image';


import AvatarProps from './avatar.props';
import clsx from 'clsx';
import styles from './avatar.module.scss';


export default function Avatar(props: AvatarProps) {
  const {src, alt, ...restProps} = props;
  const avatarClasses = clsx({
  }, styles.avatar);
  
  return <Image src={src} alt={alt} {...restProps} className={avatarClasses}/>
}