/**
 * =========================================================================
 * 🎂 WUYI Cake 當週公版急單預訂 - 每週設定檔 (config.js)
 * =========================================================================
 * 
 * 💡 說明：
 * 每週更換照片、增減款式、修改店休日或文字時，只需直接編輯此檔案即可！
 */

const CONFIG = {
  // 1. 官方 LINE 帳號 ID
  lineOaId: "@230fpemy",

  // 2. Google Apps Script 雲端試算表 API
  gasApi: "https://script.google.com/macros/s/AKfycbzVxDkFO8UDZHUZYhiwGSFsTU4v6Ilbp0mgLXHEiXtDYYv_9p3epdF_y1IoWwSalqVx/exec",

  // 3. 取貨預訂天數與門市設定
  booking: {
    minDaysNotice: 1, // 最快可訂：1 代表「明天」
    maxDaysAhead: 14, // 最遠可訂：14天內
    closedDates: [],  // 特定公休日 (格式: YYYY-MM-DD)
    weeklyClosedDay: 1, // 每週固定公休：1 代表「週一」 (0:週日, 1:週一, 2:週二...)
    pickupAddress: "台南市中西區友愛街93號",
    pickupTimeRange: "15:00～19:00",
    pickupTimes: [
      "15:00", "15:30", "16:00", "16:30",
      "17:00", "17:30", "18:00", "18:30", "19:00"
    ]
  },

  // 4. 當週可預訂公版蛋糕款式清單
  cakePhotos: [
    {
      id: "cake1",
      file: "./line_oa_chat_261101_102231.jpg",
      title: "款式 1｜復古裱花蛋糕",
      spec: "4吋整模（雙層夾餡）",
      price: 1150,
      priceText: "$1,150",
      flavorOptions: [
        "口味1：原味戚風+焙茶奶凍+焦糖核桃+原味奶油",
        "口味2：可可戚風+可可奶凍+Oreo可可脆+原味奶油"
      ],
      customConfig: {
        hasRibbon: true,
        ribbonLabel: "絲帶顏色（單選）",
        ribbonColors: ["藍色（原樣）", "黑色", "粉色", "紫色", "紅色"],
        hasTextChoice: true,
        textLabel: "蛋糕題字（二選一，僅提供這兩種題字）",
        textChoices: ["Happy Birthday", "Happy Anniversary"]
      }
    },
    {
      id: "cake2",
      file: "./R0039193.JPG",
      title: "款式 2｜夢幻白紗皇冠蛋糕",
      spec: "4吋整模（雙層夾餡）",
      price: 1200,
      priceText: "$1,200",
      badge: "含皇冠/絲帶蠟燭/插牌",
      flavorOptions: [
        "口味1：原味戚風+焙茶奶凍+焦糖核桃+原味奶油",
        "口味2：可可戚風+可可奶凍+Oreo可可脆+原味奶油"
      ],
      customConfig: {
        isFixed: true,
        fixedNote: "款式如圖製作，含圖中的皇冠、絲帶蠟燭、生日插牌，沒有客製選項喔！"
      }
    },
    {
      id: "cake3",
      file: "./R0039704.jpg",
      title: "款式 3｜可可星星半裸蛋糕（可可粉款）",
      spec: "4吋整模（雙層夾餡）",
      price: 980,
      priceText: "$980",
      flavorOptions: [
        "口味1：原味戚風+焙茶奶凍+焦糖核桃+原味奶油",
        "口味2：可可戚風+可可奶凍+Oreo可可脆+原味奶油"
      ],
      customConfig: {
        hasCardChoice: true,
        cardLabel: "蛋糕上小卡片（二選一）",
        cardChoices: ["Happy Birthday", "Happy Anniversary"]
      }
    },
    {
      id: "cake4",
      file: "./R0039525.JPG",
      title: "款式 4｜Oreo 藍莓小精靈",
      spec: "漢堡盒（4吋單層夾餡）",
      price: 760,
      priceText: "$760",
      flavorOptions: [
        "口味1：原味戚風+焦糖核桃+原味奶油",
        "口味2：可可戚風+Oreo可可脆+原味奶油"
      ],
      customConfig: {
        hasTextColor: true,
        textColorLabel: "更換題字顏色（單選）",
        textColors: ["原樣顏色", "白色", "黑色", "藍色", "粉色", "紫色", "紅色"],
        hasCardChoice: true,
        cardLabel: "蛋糕上小卡片（二選一）",
        cardChoices: ["Happy Birthday", "Happy Anniversary"]
      }
    },
    {
      id: "cake5",
      file: "./R0039526.JPG",
      title: "款式 5｜復古酒紅蝴蝶結漢堡盒",
      spec: "漢堡盒（4吋單層夾餡）",
      price: 760,
      priceText: "$760",
      flavorOptions: [
        "口味1：原味戚風+焦糖核桃+原味奶油",
        "口味2：可可戚風+Oreo可可脆+原味奶油"
      ],
      customConfig: {
        hasBowColor: true,
        bowLabel: "蝴蝶結顏色（單選）",
        bowColors: ["紅色（原樣）", "黑色", "粉色", "紫色", "藍色"],
        hasCardChoice: true,
        cardLabel: "蛋糕上小卡片（二選一）",
        cardChoices: ["Happy Birthday", "Happy Anniversary"]
      }
    },
    {
      id: "cake6",
      file: "./line_oa_chat_261101_105508.jpg",
      title: "款式 6｜繡球花珍珠漢堡盒",
      spec: "漢堡盒（4吋單層夾餡）",
      price: 760,
      priceText: "$760",
      flavorOptions: [
        "口味1：原味戚風+焦糖核桃+原味奶油",
        "口味2：可可戚風+Oreo可可脆+原味奶油"
      ],
      customConfig: {
        hasColorSelect: true,
        colorSelectLabel: "款式顏色選擇（單選）",
        colorSelectOptions: ["藍色", "粉色", "黃色", "紫色"],
        hasTextChoice: true,
        textLabel: "蛋糕題字（二選一，僅提供這兩種題字）",
        textChoices: ["Happy Birthday", "Happy Anniversary"]
      }
    }
  ],

  // 5. 需加購商品清單
  addons: [
    "2人餐具 $15",
    "5人餐具 $30",
    "10人餐具 $50",
    "生日插牌 / 造型蠟燭",
    "保冰袋/劑 $100"
  ]
};
