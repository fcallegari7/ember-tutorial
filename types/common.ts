export type Rental = {
    id: string;
    title: string;
    owner: string;
    city: string;
    location: {
      lat: number,
      lng: number,
    },
    category: string;
    bedrooms: number;
    image: string;
    description: string;
}