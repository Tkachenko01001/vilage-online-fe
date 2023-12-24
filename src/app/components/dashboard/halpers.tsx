interface StringMap {
    [key: string]: string;
}

export const navList: StringMap[] = [
    { path: "/", value: "Головна" },
    { path: "#about", value: "Про нас" },
    { path: "/catalog", value: "Каталог товарів" },
    { path: "#rates", value: "Тарифи" },
    { path: "/delivery", value: "Доставка" }
  ];