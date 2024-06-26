export interface INewPost {
    id: number;
    postCategory: string;
    title: string;
    createdTime: number[];
}

export interface IWeeklyAttdRank {
    memberName: string;
    point: number;
}
export interface IMonthlyAttdRank {
    memberName: string;
    point: number;
}
export interface IAttdRanks {
    weeklyStatisticsDtoList: IWeeklyAttdRank[];
    monthlyStatisticsDtoList: IMonthlyAttdRank[];
}

export interface IMainPhotoBannerItem {
    src: string;
    link: string;
}
export interface ILinkBannerItem {
    title: string;
    src: string;
    link: string;
}

export interface ISlidingPhoto {
    saveFilePath: string;
    saveFileName: string;
}
