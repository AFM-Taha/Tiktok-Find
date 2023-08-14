import Image from 'next/image';

interface DevCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
  github: string;
  linkedin: string;
  email: string;
}

const devData = [
  {
    name: 'Habibur Rahman',
    role: 'Front-end Developer',
    description: 'I ❤️ TypeScript | React | Next.js | Tailwind',
    image: 'https://avatars.githubusercontent.com/u/115046415?v=4',
    github: 'https://github.com/habibmollah',
    linkedin: 'https://www.linkedin.com/in/habib-ibn-tofazzal/',
    email: 'hrmollah2002@gmail.com',
  },
  {
    name: 'AFM Taha',
    role: 'Front-end Developer',
    description: '',
    image: 'https://avatars.githubusercontent.com/u/96813648?v=4',
    github: 'https://github.com/AFM-Taha',
    linkedin: 'https://www.linkedin.com/in/',
    email: 'taha.iu.bd@gmail.com',
  },
  {
    name: 'Moazzem Hossain Nahid',
    role: 'Back-end Developer',
    description: '',
    image: 'https://avatars.githubusercontent.com/u/67864972?v=4',
    github: 'https://github.com/moazzemhossainnahid',
    linkedin: 'https://www.linkedin.com/in/moazzemhossainnahid/',
    email: 'moazzemhossainnahid@gmail.com',
  },
];

function DevCard({
  name,
  role,
  description,
  image,
  github,
  linkedin,
  email,
}: DevCardProps) {
  return (
    <div>
      <Image src={image} alt={name} width={100} height={100} />
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{description}</p>
      <a href={github}>Github</a>
      <a href={linkedin}>Linkedin</a>
      <a href={email}>Email</a>
    </div>
  );
}

export default function DevGrid() {
  return (
    <div className="text-white">
      <div>
        {devData.map((data) => (
          <DevCard
            key={data.name}
            name={data.name}
            image={data.image}
            role={data.role}
            description={data.description}
            github={data.github}
            linkedin={data.linkedin}
            email={data.email}
          />
        ))}
      </div>
    </div>
  );
}
