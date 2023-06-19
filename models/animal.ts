export interface Animal {
    id: number;
    organization_id: string;
    url: string;
    type: string;
    species: string;
    breeds: {
      primary: string;
      secondary?: string;
      mixed: boolean;
      unknown: boolean;
    };
    colors: {
      primary: string;
      secondary?: string;
      tertiary?: string;
    };
    age: string;
    gender: string;
    size: string;
    coat?: string;
    attributes: {
      spayed_neutered: boolean;
      house_trained: boolean;
      declawed?: boolean;
      special_needs: boolean;
      shots_current: boolean;
    };
    environment: {
      children?: boolean;
      dogs?: boolean;
      cats?: boolean;
    };
    tags: string[];
    name: string;
    description: string;
    organization_animal_id: string;
    photos: any[]; // You could create an interface for the structure of photos if needed.
    primary_photo_cropped?: any; // As above
    videos: any[]; // As above
    status: string;
    status_changed_at: string;
    published_at: string;
    distance?: string;
    contact: {
      email: string;
      phone: string;
      address: {
        address1?: string;
        address2?: string;
        city: string;
        state: string;
        postcode: string;
        country: string;
      };
    };
    _links: {
      self: {
        href: string;
      };
      type: {
        href: string;
      };
      organization: {
        href: string;
      };
    };
  }
  
}

