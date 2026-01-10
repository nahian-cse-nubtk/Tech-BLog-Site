import { ObjectId } from "mongodb";
export type Blog={
    _id: ObjectId;
      title: string;
      shortDescription: string;
      longDescription: string;
      image: string;
      categoryId: number;
      tags: string[];
      readingTime: string;
      isFeatured: boolean;
      authorEmail: string;
      createdAt?: string;
}