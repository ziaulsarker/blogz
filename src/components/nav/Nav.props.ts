type Link = {
  url: string;
}

interface SharedNavProps {
  url: string;
  links?: Link[];
}

export default SharedNavProps;