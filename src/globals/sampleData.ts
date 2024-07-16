export const TAGS_DATA: Record<string, string> = {
  "Art": "Art",
  "Pets": "Pets",
  "Sports": "Sports",
  "Food": "Food",
  "Business": "Business",
  "Technology": "Technology",
  "Nature": "Nature",
  "FasionAndBeauty": "Fashion & Beauty"
};

interface VideoThumbnail {
  id: string;
  name: string;
  img: string;
  videoSrc: string;
  description: string;
  tags: string[];
}

export const VIDEO_THUMBNAILS_DATA: VideoThumbnail[] = [
    {
      "id": "df4r41",
      "name": "Card 1",
      "img": "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
      "videoSrc": "https://d3rf8brtyll99h.cloudfront.net/video-oliverhoos-20230224094235-7203655518039117062",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "tags": [TAGS_DATA.Food, TAGS_DATA.Art, TAGS_DATA.Pets]
    },
    {
      "id": "df4r42",
      "name": "Card 2",
      "img": "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
      "videoSrc": "https://d3rf8brtyll99h.cloudfront.net/video-hallietut-20201227005133-6910732420178300166",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "tags": [TAGS_DATA.Art, TAGS_DATA.Nature]
    },
    {
      "id": "df4r43",
      "name": "Card 3",
      "img": "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
      "videoSrc": "https://d3rf8brtyll99h.cloudfront.net/video-themakeshi-20240227191121-7340361390277807403",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "tags": [TAGS_DATA.Food, TAGS_DATA.Sports, TAGS_DATA.Business]
    },
    {
      "id": "df4r44",
      "name": "Card 4",
      "img": "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
      "videoSrc": "https://d3rf8brtyll99h.cloudfront.net/video-codypremer-20240304195521-7342599155434573102",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "tags": [TAGS_DATA.Food, TAGS_DATA.Sports, TAGS_DATA.Technology]
    },
    {
      "id": "df4r45",
      "name": "Card 4",
      "img": "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
      "videoSrc": "https://d3rf8brtyll99h.cloudfront.net/video-lowertax-20231113122728-7300922294182972704",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "tags": [TAGS_DATA.Sports, TAGS_DATA.Technology]
    },
    {
      "id": "df4r46",
      "name": "Card 5",
      "img": "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
      "videoSrc": "https://d3rf8brtyll99h.cloudfront.net/video-gentlyinte-20230906212557-7275827262354754859",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "tags": [TAGS_DATA.Sports, TAGS_DATA.Technology, TAGS_DATA.FasionAndBeauty]
    },
    {
      "id": "df4r47",
      "name": "Card 6",
      "img": "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
      "videoSrc": "https://d3rf8brtyll99h.cloudfront.net/video-thegptfund-20230516230116-7233919229232352558",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "tags": [TAGS_DATA.Sports, TAGS_DATA.Technology]
    },
    {
      "id": "df4r48",
      "name": "Card 7",
      "img": "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
      "videoSrc": "https://d3rf8brtyll99h.cloudfront.net/video-carefullyp-20220521123555-7100167428943908138",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "tags": [TAGS_DATA.Sports, TAGS_DATA.Technology]
    },
    {
      "id": "df4r49",
      "name": "Card 8",
      "img": "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
      "videoSrc": "https://d3rf8brtyll99h.cloudfront.net/video-austenalex-20240314212110-7346332248121052421",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "tags": [TAGS_DATA.Sports, TAGS_DATA.Technology]
    },
    {
      "id": "df4r485",
      "name": "Card 9",
      "img": "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
      "videoSrc": "https://d3rf8brtyll99h.cloudfront.net/video-scibodythe-20240221200535-7338148784569879850",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "tags": [TAGS_DATA.Sports, TAGS_DATA.Technology]
    },
    {
      "id": "df4r487d5",
      "name": "Card 10",
      "img": "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
      "videoSrc": "https://d3rf8brtyll99h.cloudfront.net/video-genesisnew-20230619223124-7246528357884628266",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "tags": [TAGS_DATA.Beauty]
    },
    {
      "id": "df4r48dd7d5",
      "name": "Card 10",
      "img": "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
      "videoSrc": "https://d3rf8brtyll99h.cloudfront.net/video-sunkenblim-20230526194610-7237579786262990123",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "tags": [TAGS_DATA.Nature, TAGS_DATA.Technology]
    }
  ]
