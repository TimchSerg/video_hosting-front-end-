export interface IVideo {
  id: string;
  name: string;
  filename: string;
  urlVideo: string;
  thumbNail: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export interface ICreateVideo {
  name: string;
  title: string;
  filename: string;
  urlVideo: string;
  thumbNail: string;
  pic: string;
}

export interface IUploadVideo {
  urlVideo: string;
  thumbNail: string;
  pic: string;
}