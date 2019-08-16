export interface Model {
    title: {
      rendered: string;
    };
    meta_fields: {
      bed: number;
      bath: number;
      category: string;
      den: boolean;
      elevation: boolean;
      featured_image: string;
      floorPlan__options: boolean;
      floorPlan__pdf: string;
      garage: string;
      modelImage__floorplan: string;
      modelImage__thumbnail: string;
      sqft: string;
      status: string;
      virtualTour: string;
    };
    category_name: string;
}

