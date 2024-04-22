import a from "@/assets/images/反馈问题.png";
import b from "@/assets/images/工作分配.png";
import c from "@/assets/images/接受工作.png";
import d from "@/assets/images/汇报工作.png";
import e from "@/assets/images/工作复盘.png";
import f from "@/assets/images/说服他人.png";

interface HomeConfigType {
  title: string;
  description: string;
  id: number;
  img?: string;
  link?: string;
  icon: string;
}

export const defaultHome: HomeConfigType = {
  title: "返回首页",
  description: "返回首页",
  id: 0,
  link: "/",
  icon: "icon-home",
};

export const homeConfig: HomeConfigType[] = [
  {
    title: "工作分配",
    description: "能抓住重点",
    img: b,
    id: 1,
    icon: "icon-xing",
  },
  {
    title: "接受工作",
    description: "问清标准",
    img: c,
    id: 2,
    icon: "icon-xingxing",
  },
  {
    title: "反馈问题",
    description: "带解决方案",
    img: a,
    id: 3,
    icon: "icon-shengdanshu",
  },
  {
    title: "汇报工作",
    description: "突出结果",
    img: d,
    id: 4,
    icon: "icon-shengdanbaozhu",
  },
  {
    title: "复盘总结",
    description: "有舍有得",
    img: e,
    id: 5,
    icon: "icon-shengdanquqi",
  },
  {
    title: "说服他人",
    description: "有理有据",
    img: f,
    id: 6,
    icon: "icon-shengdanmaozi",
  },
];

export const quadrantsConfig = [
  {
    title: "I、重要且紧急",
    id: 1,
    color: "red",
  },
  {
    title: "II、重要不紧急",
    id: 2,
    color: "yellow",
  },
  {
    title: "III、不重要紧急",
    id: 3,
    color: "blue",
  },
  {
    title: "IV、不重要不紧急",
    id: 4,
    color: "green",
  },
];
