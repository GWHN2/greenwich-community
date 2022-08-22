import Image from 'next/image';

interface DiplomaProps {
  id: string;
  image: any;
}

const Diploma = (props: DiplomaProps) => {
  const { id, image } = props;

  return (
    <div className='relative object-contain h-64 w-auto lg:w-80'>
      <Image src={image} alt='logo' layout='fill' objectFit='contain' />
    </div>
  );
};

export default Diploma;
