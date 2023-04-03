interface SharedBioProps {
  src?: string;
}

interface BioWtihChildren extends SharedBioProps {
  children: React.ReactNode;
  title: never;
  text: never
}

interface BioWithTitleAndText extends SharedBioProps {
  children: never;
  title: string
  text: string;
}

type BioProps = BioWtihChildren | BioWithTitleAndText;

export default BioProps;