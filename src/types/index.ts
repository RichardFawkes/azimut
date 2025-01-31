export type Service = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: {
    overview: string;
    features: string[];
    image: string;
  };
};