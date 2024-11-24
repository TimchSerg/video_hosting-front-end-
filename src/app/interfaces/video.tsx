export interface IVideo {
  id: string;
  name: string;
  urlVideo: string;
  thumbNail: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export interface ICreateVideo {
  name: string;
  title: string;
  urlVideo: string;
  thumbNail: string;
}