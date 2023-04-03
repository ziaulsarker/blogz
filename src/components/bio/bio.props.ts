import { StaticImageData } from "next-env";

interface SharedBioProps {
  src?: string | StaticImageData;
}

interface BioWtihChildren extends SharedBioProps {
  children: React.ReactNode;
  title?: never;
  text?: never
}

interface BioWithTitleAndText extends SharedBioProps {
  children?: never;
  title: string
  text: string;
}

type BioProps = BioWtihChildren | BioWithTitleAndText;

export default BioProps;